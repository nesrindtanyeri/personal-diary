import DefaultModal from "./components/DefaultModal";
import StorageHandler from "./components/StorageHandler";
import Hero from "./components/Hero";
import Footer from "./Footer";
import DiaryEntryModal from "./components/DiaryEntryModal";
import DiaryEntryList from "./components/DiaryEntryList";
import { useEffect, useState } from "react";

function App() {
  const [selectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    if (!selectedItem) return;
    toggleModal();
  }, [selectedItem]);

  /**
   * shows / hides the modal content
   */
  const toggleModal = () => {
    document.getElementById("default-modal").showModal();
  };
  const openDairyEntryModal = () => {
    document.getElementById("DairyEntryModal").showModal();
  };

  return (
    <>
      <header>
        <Hero
          openDairyEntryModal={openDairyEntryModal}
          toggleModal={toggleModal}
          setSelectedItem={setSelectedItem}
        />
      </header>

      <main>
        <DiaryEntryList setSelectedItem={setSelectedItem} />
      </main>
      <Footer />

      <DiaryEntryModal />
      <DefaultModal selectedItem={selectedItem} />
    </>
  );
}

export default App;
