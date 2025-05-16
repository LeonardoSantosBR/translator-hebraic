import { useEffect, useState } from "react";
import Header from "./components/header";
import { Input } from "@chakra-ui/react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {}, [text]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full flex-[9] bg-[#dfe3ee] grid grid-cols-2">
        <div className="w-full flex justify-center items-center bg-gray-200">
          <div className="w-3/4 max-w-md bg-blue-500 text-white p-6 rounded-xl shadow-lg text-center">
            <Input
              placeholder="Digite aqui..."
              size="lg"
              variant="flushed"
              color="white"
              className="placeholder:text-white text-white"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-slate-300">
          <p className="text-lg font-medium p-5 text-black underline">
            Lado Direito
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
