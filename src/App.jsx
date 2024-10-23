import DefaultModal from "./components/DefaultModal";
import StorageHandler from "./components/StorageHandler";
import Hero from "./components/Hero";
import Footer from "./Footer";
import DiaryEntryModal from "./components/DiaryEntryModal";
import DiaryEntryList from "./components/DiaryEntryList";

function App() {

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
        <Hero openDairyEntryModal={openDairyEntryModal} toggleModal={toggleModal} />
        
        <DiaryEntryModal />
        
      </header>

      <main>
        <DiaryEntryList />
      </main>
    <Footer />

      <DefaultModal  />
     
    </>
  );
}

export default App;
