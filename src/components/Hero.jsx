import ThemeSwitcher from "./ThemeSwitcher";

const imgUrl = new URL('../assets/bg.jpg', import.meta.url).href;

const Hero = ({toggleModal}) => {
    console.log(imgUrl);
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage:`url(${imgUrl})`,
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Personal Diary</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut
          assumenda excepturi exercitationem quasi. In deleniti eaque aut
          repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary" onClick={toggleModal}>
          Add today's entry now (if none present)
        </button>
        <button className="btn btn-primary" onClick={toggleModal}>
          View today's entry (if present)
        </button>
        <ThemeSwitcher />
      </div>
    </div>
  </div>
)
}

export default Hero