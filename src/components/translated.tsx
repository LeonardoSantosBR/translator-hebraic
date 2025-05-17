import Spinner from "./spinner";

function Translated({
  isLoading,
  result,
}: {
  isLoading: boolean;
  result: string;
}) {
  return (
    <div className="bg-slate-300">
      {isLoading ? (
        <Spinner />
      ) : (
        <p className="text-3xl font-medium p-5 text-black underline">
          {result}
        </p>
      )}
    </div>
  );
}

export default Translated;
