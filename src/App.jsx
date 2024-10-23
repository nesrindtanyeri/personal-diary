import { useState } from "react";
import DefaultModal from "./components/DefaultModal";
import StorageHandler from "./components/StorageHandler";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./Footer";
import DiaryEntryModal from "./components/DiaryEntryModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * shows / hides the modal content
   */
  const toggleModal = () => {
    setModalOpen((prev) => !prev);
    document.getElementById("default-modal").showModal();
  };
  const openDairyEntryModal = () => {
  document.getElementById("DairyEntryModal").showModal();
  };

  return (
    <>
      <header>
        <Hero toggleModal={toggleModal} />
        <DiaryEntryModal />
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
<button className="btn btn-primary" onClick={openDairyEntryModal}>Nesrin's button</button>
    <Footer />

      <DefaultModal  />
     
    </>
  );
}

export default App;
