import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName); 
    console.log(`Botón presionado: ${buttonName}`);
  };

  return (
    <>
      <div className="bg-green-500 p-4 text-center">
        <p className="text-2xl font-black">
          Detector de gatos y perros.<span className="text-white font-black"> v1.0</span>
        </p>
      </div>
      <h1 className="text-center text-2xl font-bold mt-4">Detector</h1>
      <div className="flex justify-center space-x-10 mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => handleClick("perceptron")}
        >
          Perceptrón
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => handleClick("capas-densas")}
        >
          Capas densas
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("convolucional")}
        >
          CNN
        </button>
      </div>

      <h1 className="text-center texxt-2xl font-bold mt-4">
        Detector usando: {activeButton ? activeButton : "Ningún modelo seleccionado"}
      </h1>
    </>
  );
}

export default App;