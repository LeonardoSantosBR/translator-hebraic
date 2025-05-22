import Spinner from "./spinner";

function Translated({
  result,
  isLoading,
}: {
  result?: string;
  isLoading: boolean;
}) {
  return (
    <div className="bg-slate-300">
      {isLoading ? (
        <Spinner />
      ) : (
        <p className="text-2xl font-medium p-2 text-black underline">
          {result}
        </p>
      )}
    </div>
  );
}

export default Translated;
