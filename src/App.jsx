import DefaultModal from "./components/DefaultModal";
import StorageHandler from "./components/StorageHandler";
import Hero from "./components/Hero";
import Footer from "./Footer";
import DiaryEntryList from "./components/DiaryEntryList";

function App() {

  /**
   * shows / hides the modal content
   */
  const toggleModal = () => {
    document.getElementById("default-modal").showModal();
  };

  return (
    <>
      <header>
        <Hero toggleModal={toggleModal} />
      </header>

      <main>
        <DiaryEntryList />
      </main>

      <Footer />

      <DefaultModal />
    </>
  );
}

export default App;
