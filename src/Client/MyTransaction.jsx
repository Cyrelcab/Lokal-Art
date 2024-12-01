import { useEffect, useState } from "react";
import Navbar from "@/Artist/navbar";

export default function MyTransactions() {
  const [serviceType, setServiceType] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setPaymentAmount] = useState("");
  const [name, setName] = useState("");
  const firstName = localStorage.getItem("first_name") || "John";
  const lastName = localStorage.getItem("last_name") || "Doe";
  const fullName = `${firstName} ${lastName}`;

  // Retrieve data from session storage when the component mounts
  useEffect(() => {
    const storedServiceType = sessionStorage.getItem("selectedService");
    const storedDate = sessionStorage.getItem("date");
    const storedPaymentMethod = sessionStorage.getItem("selectedOption");
    const storedAmount = sessionStorage.getItem("paymentAmount");
    const storedName = sessionStorage.getItem("userName");
    setServiceType(storedServiceType || "N/A");
    setTransactionDate(storedDate || "N/A");
    setPaymentMethod(storedPaymentMethod || "N/A");
    setPaymentAmount(storedAmount || "N/A")
    setName(storedName);
  }, []);

  return (
    <div>
      <Navbar fullName={fullName}/>
      <div className="mt-20 grid grid-cols-1">
        <div className="flex flex-col justify-center items-center">
          <div className="border-2 rounded-xl w-[70%] sm:w-[40%] border-cyan-500">
            <h1 className="flex flex-col justify-center items-center text-[1rem] md:text-xl text-cyan-400 font-bold py-5 border-b-2 border-cyan-500">
              Transaction Details
            </h1>
            <div className="space-y-3 mt-2 px-5 pb-5">
            <div className="sm:flex space-x-3">
                <h1 className="font-bold">Artist Name: </h1>
                <p>{name}</p>
              </div>
              <div className="sm:flex space-x-3">
                <h1 className="font-bold">Date: </h1>
                <p>{transactionDate}</p>
              </div>
              <div className="sm:flex space-x-3">
                <h1 className="font-bold">Service Type: </h1>
                <p>{serviceType}</p>
              </div>
              <div className="sm:flex space-x-3">
                <h1 className="font-bold">Payment Method: </h1>
                <p>{paymentMethod}</p>
              </div>
              <div className="sm:flex space-x-3">
                <h1 className="font-bold">Amount: </h1>
                <p>{amount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
