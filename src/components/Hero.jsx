import ThemeSwitcher from "./ThemeSwitcher";
import StorageHandler from "./StorageHandler";
import DailyQuote from "./DailyQuote";

const Hero = ({ openDairyEntryModal, toggleModal, setSelectedItem }) => {
  const imgUrl = new URL("../assets/img/diary1.jpg", import.meta.url).href;

  const todaysEntry = StorageHandler.getTodaysEntry();

  const setModalContent = () =>{
    setSelectedItem({...todaysEntry});
  }

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-roboto">Personal Diary</h1>
          <p className="mb-5 font-bold font-roboto">
            A place where you can write down your thoughts and memories.
          </p>
          <DailyQuote />
          {todaysEntry && (
            // we have an entry for today, so we have to open the entry details modal
            <button className="btn btn-primary w-full py-4 mb-4" onClick={() => setModalContent()}>
              See what happened today
            </button>
          )}
          <button className="btn btn-primary w-full py-4" onClick={openDairyEntryModal}>
            It is time to create a new memory
          </button>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Hero;
