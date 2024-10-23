import { useState } from "react";
import DefaultModal from "./components/DefaultModal";
import StorageHandler from "./components/StorageHandler";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./Footer";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * shows / hides the modal content
   */
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
    document.getElementById("default-modal").showModal();
  };

  return (
    <>
      <header>
        <Hero toggleModal={toggleModal} />
      </header>

      <main className="py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>

    <Footer />

      <DefaultModal toggleModal={toggleModal} />
    </>
  );
}

export default App;
