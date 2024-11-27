import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import multer from "multer";
import fsPromises from "fs/promises";
import bcrypt from "bcrypt";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = "./users.json";

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Utility functions
const loadData = async () => {
  if (fs.existsSync(DATA_FILE)) {
    const data = await fsPromises.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  }
  return [];
};

const saveData = async (data) => {
  await fsPromises.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { first_name, last_name } = req.body;

    if (!first_name || !last_name) {
      return cb(new Error("First name and last name are required."));
    }

    const formattedName = `${first_name}-${last_name}`
      .toLowerCase()
      .replace(/\s+/g, "-");
    const userFolder = path.join(__dirname, "uploads", formattedName);

    fs.mkdirSync(userFolder, { recursive: true });
    cb(null, userFolder);
  },
  filename: (req, file, cb) => {
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
      return cb(new Error("First name and last name are required."));
    }

    const formattedName = `${first_name}-${last_name}`
      .toLowerCase()
      .replace(/\s+/g, "-");
    const fileExtension = path.extname(file.originalname);

    // Determine prefix based on the field name (profile_image or banner_image)
    const prefix =
      file.fieldname === "banner_image"
        ? "uploaded-bannerimage"
        : "uploaded-profileimage";

    // Create the filename
    const filename = `${prefix}-${formattedName}${fileExtension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage }).fields([
  { name: "profile_image", maxCount: 1 },
  { name: "banner_image", maxCount: 1 },
]);

// Routes

// 1. Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { first_name, last_name, email, password, role } = req.body;

    if (!first_name || !last_name || !email || !password || !role) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const users = await loadData();

    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ error: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role,
      profile_image: null,
      banner_image: null,
    };

    users.push(newUser);
    await saveData(users);

    res
      .status(201)
      .json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// 2. Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const users = await loadData();
    const user = users.find((u) => u.email === email);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password." });
    }

    res.status(200).json({ role: user.role });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// 3. Image Upload Route
app.post("/upload-images", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("File upload error:", err);
      return res.status(400).json({ error: err.message });
    }

    const { first_name, last_name } = req.body;

    if (!first_name || !last_name) {
      return res
        .status(400)
        .json({ error: "First name and last name are required." });
    }

    const responseData = {};

    if (req.files.profile_image && req.files.profile_image[0]) {
      responseData.profile_image = `/uploads/${first_name}-${last_name.toLowerCase()}/${
        req.files.profile_image[0].filename
      }`;
    }
    if (req.files.banner_image && req.files.banner_image[0]) {
      responseData.banner_image = `/uploads/${first_name}-${last_name.toLowerCase()}/${
        req.files.banner_image[0].filename
      }`;
    }

    res.status(200).json(responseData);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
