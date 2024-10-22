import { useState } from "react";
import DefaultModal from "./components/DefaultModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <header>Header</header>
      <main>Main</main>
      <footer>Footer</footer>
      <button
        onClick={toggleModal}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        open modal
      </button>
      {modalOpen && <DefaultModal toggleModal={toggleModal} />}
    </>
  );
}

export default App;
