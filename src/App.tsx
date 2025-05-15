import Header from "./components/header";
import { Input } from "@chakra-ui/react";

function App() {
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
            />
          </div>
        </div>

        <div>
          <p className="text-lg font-medium">Lado Direito</p>
        </div>
      </div>
    </div>
  );
}

export default App;
