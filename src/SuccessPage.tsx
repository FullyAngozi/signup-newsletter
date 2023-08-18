import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {

  const navigate = useNavigate()

 const  reDirect = () => {
  navigate('/')
 }
  return (
    <div className="bg-green-500 min-h-screen flex justify-center items-center">
      <h2 className="text-white text-2xl">Email submitted successfully!</h2>
      <button onClick={reDirect} className=" block p-2 border">Return</button>
    </div>
  );
}

export default SuccessPage;
