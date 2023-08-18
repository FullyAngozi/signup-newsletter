import React, { useState, ChangeEvent, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import MobileImage from "./assets/images/illustration-sign-up-mobile.svg";
import DesktopImage from "./assets/images/illustration-sign-up-desktop.svg";
import Iconlist from "./assets/images/icon-list.svg";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim() === "") {
      alert("Please enter an email before submitting.");
      return;
    }

    const formData = { email };
    const formDataJson = JSON.stringify(formData);

    localStorage.setItem("email", formDataJson);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Navigate to="/success" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <img
          src={MobileImage}
          alt="Mobile Company Illustration"
          className="block md:hidden w-full"
        />
        <img
          src={DesktopImage}
          alt="Desktop Company Illustration"
          className="hidden md:block"
        />
      </div>
      <div className="flex flex-col px-7 max-w-xl gap-4">
        <div>
          <h1 className="font-bold text-3xl text-blue-950 py-3">Stay Updated!</h1>
          <p className="pb-6 text-blue-950">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="space-y-6">
            <li className="flex items-start space-x-3">
              <img src={Iconlist} alt="Icon" className="w-6 h-6" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex items-start space-x-3">
              <img src={Iconlist} alt="Icon" className="w-6 h-6" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex items-start space-x-3">
              <img src={Iconlist} alt="Icon" className="w-6 h-6" />
              <p>And much more!</p>
            </li>
          </ul>
        </div>
        <div className="pt-5">
          <form onSubmit={handleEmailSubmission}>
            <label className=" text-blue-950">Email address</label>
            <input
              type="email"
              placeholder="email@company.com"
              className="p-3 rounded-xl w-full my-3 border border-gray-300"
              value={email}
              onChange={handleEmail}
            />
            <button className="px-4 py-2 bg-blue-950 text-white rounded-md w-full">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
