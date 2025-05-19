/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./components/header";
import Translated from "./components/translated";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleTranslate } from "./http/handle-translate";
import TextArea from "./components/textarea";

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
      <div className="w-full flex-[9] bg-[#dfe3ee] grid grid-cols-1 sm:grid-cols-2">
        <TextArea text={text} setText={setText} />
        <Translated isLoading={isLoading} result={result} />
      </div>
    </div>
  );
}

export default App;
