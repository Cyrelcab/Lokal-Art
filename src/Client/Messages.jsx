import { useEffect, useState } from "react";
import Navbar from "@/Artist/navbar";

export default function Messages() {
  const firstName = localStorage.getItem("first_name") || "John";
  const lastName = localStorage.getItem("last_name") || "Doe";
  const fullName = `${firstName} ${lastName}`;

  return (
    <div>
      <Navbar fullName={fullName}/>
      <div className="h-screen flex justify-center items-center">
        No Messages Yet
      </div>
    </div>
  );
}
