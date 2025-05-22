import Header from "./components/header";
import Translated from "./components/translated";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleTranslate } from "./http/handle-translate";
import TextArea from "./components/textarea";
import type { Iform } from "./interfaces/Iform";

function App() {
  const [form, setForm] = useState<Iform>({
    text: "",
    result: "",
  });
  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: handleTranslate,
    onSuccess: (data) => {
      const textResult = data.data.translations[0].translatedText;
      handleChange("result", textResult);
    },
  });

  useEffect(() => {
    if (!form.text) {
      handleChange("result", "");
      return;
    }
    const delayDebounce = setTimeout(() => {
      mutate({ text: form.text });
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [mutate, form.text]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full flex-[9] bg-[#dfe3ee] grid grid-cols-1 sm:grid-cols-2">
        <TextArea text={form.text} setForm={setForm} />
        <Translated isLoading={isLoading} result={form.result} />
      </div>
    </div>
  );
}

export default App;
