import { ThreeDots } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="h-full bg-slate-400 bg-opacity-55 flex justify-center items-center">
      <ThreeDots height="80" width="80" color="blue" ariaLabel="loading" />
    </div>
  );
}

export default Spinner;
