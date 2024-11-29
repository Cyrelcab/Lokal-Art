import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Get the root directory and set it to 'public'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.dirname(__filename), "../");

// Log directory for debugging purposes
console.log("Server directory:", __dirname);

// Use cors and body parsers
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads"))); // Correct path for serving files

const DATA_FILE = "./users.json";

// Load user data from file
const loadData = () => {
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  }
  return [];
};

// Save updated user data to file
const saveData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 4));
};

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
      return cb(new Error("First name and last name are required"));
    }

    const formattedName = `${first_name}-${last_name}`
      .toLowerCase()
      .replace(/\s+/g, "-");
    const userFolder = path.join(__dirname, "public/uploads", formattedName); // Save under public/uploads/first-last

    if (!fs.existsSync(userFolder)) {
      fs.mkdirSync(userFolder, { recursive: true });
    }
    cb(null, userFolder); // Store image in user-specific folder
  },
  filename: (req, file, cb) => {
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
      return cb(new Error("First name and last name are required"));
    }

    const formattedName = `${first_name}-${last_name}`
      .toLowerCase()
      .replace(/\s+/g, "-");
    const fileExtension = path.extname(file.originalname);
    const filename = `${file.fieldname}-uploaded-image-${formattedName}${fileExtension}`;
    cb(null, filename); // Generate filename for the uploaded file
  },
});

const upload = multer({ storage }).fields([
  { name: "profile_image", maxCount: 1 },
  { name: "banner_image", maxCount: 1 },
]);

// 1. **Signup Route** - For registering the user (without image upload)
app.post("/signup", async (req, res) => {
  try {
    const { first_name, last_name, email, password, role } = req.body;

    if (!first_name || !last_name || !email || !password || !role) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Load existing users
    const usersData = await fsPromises.readFile(DATA_FILE, "utf8");
    const users = JSON.parse(usersData);

    // Check if the user already exists
    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Prepare new user data
    const newUser = {
      first_name,
      last_name,
      email,
      password,
      role,
      profile_image: "",
      banner_image: "",
    };

    // Add new user to the users array
    users.push(newUser);

    // Save updated users data to the JSON file
    await fsPromises.writeFile(DATA_FILE, JSON.stringify(users, null, 2));

    res
      .status(200)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Parse URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// File upload route
app.post("/upload-images", upload, async (req, res) => {
  try {
    const { email, first_name, last_name } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Log incoming files as a JSON string for better readability
    console.log("Received files:", JSON.stringify(req.files, null, 2));

    // Load users from file
    const users = loadData();
    const user = users.find((u) => u.email === email);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const responseData = {};

    // Helper to delete old files
    const deleteOldFile = async (filePath) => {
      const absolutePath = path.join(__dirname, filePath);
      if (fs.existsSync(absolutePath)) {
        await fsPromises.unlink(absolutePath); // Remove the file
        console.log(`Deleted old file: ${absolutePath}`);
      }
    };

    // Process profile_image
    if (req.files.profile_image && req.files.profile_image[0]) {
      const profileImagePath = `/uploads/${first_name.toLowerCase()}-${last_name.toLowerCase()}/${
        req.files.profile_image[0].filename
      }`;

      // Delete the old profile image if it exists
      if (fs.existsSync(user.profile_image)) {
        await deleteOldFile(user.profile_image);
      }

      responseData.profile_image = profileImagePath;
      user.profile_image = profileImagePath; // Update user's profile_image
    }

    // Process banner_image
    if (req.files.banner_image && req.files.banner_image[0]) {
      console.log("Processing banner image...");
      const bannerImagePath = `/uploads/${first_name.toLowerCase()}-${last_name.toLowerCase()}/${
        req.files.banner_image[0].filename
      }`;

      // Log the banner image path to ensure it's being processed correctly
      console.log("Banner Image Path:", bannerImagePath);

      // Delete the old banner image if it exists
      if (fs.existsSync(user.banner_image)) {
        await deleteOldFile(user.banner_image);
      }

      responseData.banner_image = bannerImagePath;
      user.banner_image = bannerImagePath; // Update user's banner_image
    }

    // Save updated user data to JSON file
    await fsPromises.writeFile(DATA_FILE, JSON.stringify(users, null, 2));

    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error in /upload-images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login endpoint (unchanged)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  try {
    const users = loadData();

    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ role: user.role, email: user.email });
  } catch (error) {
    console.error("Error handling login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
