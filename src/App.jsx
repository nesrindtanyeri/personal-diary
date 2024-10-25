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
  const [entryList, setEntryList] = useState(null);
  const [selectedItem, setSelectedItem] = useState(false);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (!selectedItem) return;
    toggleModal();
  }, [selectedItem]);

  // set the theme of the page to the one selected (from localStorage)
  useEffect(() => {
    const theme = StorageHandler.getTheme();
    document.documentElement.dataset.theme = theme;
    document.body.classList.remove('hidden');

    setEntryList(StorageHandler.getList());
  }, []);

  // Handles editing the selected entry
  const handleEdit = (item) => {
    console.log("Editing item:", item);
    // TODO: Add your edit logic here
  };

  // Handles deleting the selected entry
  const handleDelete = (item) => {
    console.log("Deleting item:", item);
    // Add your delete logic here
    StorageHandler.removeItemByTimestamp(item.timestamp);
    document.getElementById('default-modal').close();
    // we need time as an unique identifier
    // const time = new Date().getTime();
    // setAlerts([
    //   <Alert key={time} delay={9000} type="success" text="Entry has been deleted" />,
    //   ...alerts,
    // ]);

    addAlert('success', 'Entry has been deleted')

    setEntryList(StorageHandler.getList());
  };

  const addAlert = (type, text) => {
    const time = new Date().getTime();
    setAlerts([
      <Alert key={time} delay={9000} type={type} text={text} />,
      ...alerts,
    ]);
  }

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
        <DiaryEntryList setSelectedItem={setSelectedItem} entryList={entryList} />
      </main>
      <Footer />

      <AlertContainer alerts={alerts} />

      <DiaryEntryModal addAlert={addAlert}/>

      {/* Pass handleEdit and handleDelete to DefaultModal */}
      <DefaultModal selectedItem={selectedItem} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
}

export default App;
