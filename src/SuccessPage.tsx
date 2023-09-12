import { useNavigate } from "react-router-dom";
import iconSuccess from "./assets/images/icon-success.svg";

interface SuccessPageProps {
  email: string; // Specify the type of the 'email' prop as a string
}

const SuccessPage: React.FC<SuccessPageProps> = () => {
  const navigate = useNavigate();
  const reDirect = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-between md:justify-normal h-screen md:bg-gray-200">
      <>
        <div className="max-w-[240px] mx-auto mt-40 border shadow-xl p-6">
          <img src={iconSuccess} alt="" className="w-13 block mb-5" />
          <h1 className="text-4xl font-bold mb-5">
            Thanks for <br /> subscribing
          </h1>
          <p className="">
            A confirmation email has been sent to "email". Please open it and
            click the button inside to confirm your subscription
          </p>
        </div>
        <div className="mx-auto mb-16 md:mt-5">
          <button
            onClick={reDirect}
            className="border bg-blue-950 text-white px-16 py-4 rounded-md"
          >
            Return
          </button>
        </div>
      </>
    </div>
  );
};

export default SuccessPage;
