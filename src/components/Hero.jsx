import ThemeSwitcher from "./ThemeSwitcher";
import StorageHandler from "./StorageHandler";

const Hero = ({ openDairyEntryModal, toggleModal, setSelectedItem }) => {
  const imgUrl = new URL("../assets/bg.jpg", import.meta.url).href;
  console.log(imgUrl);

  const todaysEntry = StorageHandler.getTodaysEntry();

  const setModalContent = () =>{
    setSelectedItem(todaysEntry);
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
          <h1 className="mb-5 text-5xl font-bold">Personal Diary</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {todaysEntry ? (
            // we have an entry for today, so we have to open the entry details modal
            <button className="btn btn-primary" onClick={() => setModalContent()}>
              View today's entry
            </button>
          ) : (
            // we have no entry for today, so we have to open the form-input modal
            <button className="btn btn-primary" onClick={toggleModal}>
              Add today's entry now
            </button>
          )}
          <button className="btn btn-primary" onClick={openDairyEntryModal}>
            Nesrin's button
          </button>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Hero;
