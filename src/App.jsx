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
      <header className="py-8 px-4 mx-auto max-w-screen-xl">Header</header>
      <main>
        {/* the list section: to be made into a component */}
        <section className="py-8 px-4 mx-auto max-w-screen-xl">
          <h2>Entries</h2>

          <div className="md:grid md:grid-cols-4 md:gap-4">
            {/* the card: to be made into a component / button needs to open the details-modal */}
            <button className="card rounded-lg shadow-lg" onClick={toggleModal}>
              <img
                src="https://picsum.photos/400"
                alt="Title"
                className="rounded-t-lg w-full hover:opacity-90"
              />
              <span className="text-sm px-2.5 py-1">22.10.2024</span>
              <h3 className="px-2.5 py-1">Title</h3>
            </button>
          </div>
        </section>
        {/* the add entry section */}
        <section className="py-8 px-4 mx-auto max-w-screen-xl">
          {/* button needs to open the form-modal */}
          <button
            onClick={toggleModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            add new entry
          </button>
        </section>
      </main>
      <footer className="py-8 px-4 mx-auto max-w-screen-xl">Footer</footer>

      {modalOpen && <DefaultModal toggleModal={toggleModal} />}
    </>
  );
}

export default App;
