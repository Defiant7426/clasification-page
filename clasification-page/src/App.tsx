import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName); 
    console.log(`Botón presionado: ${buttonName}`);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log(files);
    }
  }

  const handleDivClick = () => {
    const fileInput = document.getElementById("file") as HTMLInputElement;
    fileInput.click();
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

      <h1 className="text-center text-2xl font-bold mt-4">
        Detector usando: {activeButton ? activeButton : "Ningún modelo seleccionado"}
      </h1>
      
      <div className="flex justify-center mt-4">
        <div
          className="file-upload border-2 border-dashed border-gray-400 rounded-lg p-6 w-full max-w-md text-center bg-gray-100 hover:bg-gray-200 cursor-pointer"
          onClick={handleDivClick}
        >
          <p className="text-gray-600">Arrastra y suelta tu archivo aquí o haz clic para seleccionar</p>
          <input
            type="file"
            id="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>

      {selectedFiles && (
        <div className="flex justify-center mt-4">
          <ul>
            {Array.from(selectedFiles).map((file, index) => (
              <li key={index} className="text-center">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}

    </>
  );
}

export default App;