/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./components/header";
import Spinner from "./components/spinner";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleTranslate } from "./http/handle-translate";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: handleTranslate,
    onSuccess: (data) => {
      const textResult = data.data.translations[0].translatedText;
      setResult(textResult);
    },
  });

  useEffect(() => {
    if (!text) {
      setResult("");
      return;
    }

    const delayDebounce = setTimeout(() => {
      mutate({ text });
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [text]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full flex-[9] bg-[#dfe3ee] grid grid-cols-2">
        <div className="flex justify-center p-6 bg-blue-500">
          <textarea
            placeholder="Digite aqui..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-64 p-4 text-white bg-blue-500  placeholder-white outline-none resize-none"
          />
        </div>
        <div className="bg-slate-300">
          {isLoading ? (
            <Spinner />
          ) : (
            <p className="text-3xl font-medium p-5 text-black underline">
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
