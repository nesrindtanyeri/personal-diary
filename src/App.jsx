import DefaultModal from "./components/DefaultModal";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import DiaryEntryModal from "./components/DiaryEntryModal";
import DiaryEntryList from "./components/DiaryEntryList";
import { useEffect, useState } from "react";
import AlertContainer from "./components/AlertContainer";
import Alert from "./components/Alert";
import StorageHandler from "./components/StorageHandler";

function App() {
  const [selectedItem, setSelectedItem] = useState(false);
  const [alerts, setAlerts] = useState([]);

  // TODO: use this as alert (this is just a fake)
  useEffect(() => {
    if (!selectedItem) return;
    toggleModal();
    const time = new Date().getTime();
    setAlerts([
      <Alert key={time} delay={9000} type="success" text="This is an alert" />,
      ...alerts,
    ]);
  }, [selectedItem]);

  // set the theme of the page to the one selected (from localStorage)
  useEffect(() => {
    const theme = StorageHandler.getTheme();
    document.documentElement.dataset.theme = theme;
    document.body.classList.remove('hidden');
  }, []);

  // Handles editing the selected entry
  const handleEdit = (item) => {
    console.log("Editing item:", item);
    // Add your edit logic here
  };

  // Handles deleting the selected entry
  const handleDelete = (item) => {
    console.log("Deleting item:", item);
    // Add your delete logic here
  };

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

      <AlertContainer alerts={alerts} />

      <DiaryEntryModal setAlerts={setAlerts} alerts={alerts} />

      {/* Pass handleEdit and handleDelete to DefaultModal */}
      <DefaultModal selectedItem={selectedItem} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
}

export default App;
