import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";

const ClientTransactions = () => {
  const [clientData, setClientData] = useState(null);

  // Fetch client data
  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const loggedInEmail = localStorage.getItem("email");

        if (!loggedInEmail) {
          console.error("No logged-in email found.");
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
        }
      } catch (error) {
        console.error("Error loading client data:", error);
      }
    };

    fetchClientData();
  }, []);

  // Conditionally render the component
  if (!clientData) {
    return (
      <div className="h-full bg-gray-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const { first_name, last_name, email } = clientData;

  return (
    <div className="h-full bg-gray-100">
      <Navbar fullName={`${first_name} ${last_name}`} />
    </div>
  );
};

export default ClientTransactions;
