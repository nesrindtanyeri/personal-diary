import { useState } from "react";
import DefaultModal from "./components/DefaultModal";
import StorageHandler from "./components/StorageHandler";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * shows / hides the modal content
   */
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <header>Header</header>
      <main>
        <section
          id="list"
          className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
        >
          <h2>Entries</h2>
          <div className="grid grid-cols-4">
            <button className="card rounded-lg shadow-lg" onClick={toggleModal}>
                <img
                  src="https://picsum.photos/400"
                  alt="Title"
                  className="rounded-t-lg"
                />
                <span className="text-sm px-2.5 py-1">22.10.2024</span>
                <h3 className="px-2.5 py-1">Title</h3>
            </button>
          </div>
        </section>
      </main>
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
