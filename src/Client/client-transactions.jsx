import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import { useNavigate } from "react-router-dom";

const ClientTransactions = () => {
  const [clientData, setClientData] = useState(null);
  const navigate = useNavigate();

  // Fetch client data
  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const loggedInEmail = localStorage.getItem("email");

        if (!loggedInEmail) {
          console.error("No logged-in email found.");
          navigate("/login");
          return;
        }

        const response = await fetch("/users.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.statusText}`);
        }

        const users = await response.json();
        const client = users.find((user) => user.email === loggedInEmail);

        if (client) {
          setClientData(client);
        } else {
          console.error("User not found in the database.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error loading client data:", error);
        navigate("/login");
      }
    };

    fetchClientData();
  }, [navigate]);

  // Redirect or show loading screen until clientData is available
  if (!clientData) {
    return null; // Render nothing while redirecting or loading
  }

  const { first_name, last_name, email } = clientData;

  return (
    <div className="h-full bg-gray-100">
      <Navbar fullName={`${first_name} ${last_name}`} />
    </div>
  );
};

export default ClientTransactions;
