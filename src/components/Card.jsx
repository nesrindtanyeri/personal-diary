import { useEffect, useState } from "react";

const Card = ({ entry, setSelectedItem }) => {
  // const [entry, setEntry] = useState(null);

  // useEffect(() => {
  //   setMyEntry(entry);
  // }, []);

  const setModalContent = () => {
    setSelectedItem({...entry});
  };

  const imgPath = entry.image || "https://placehold.co/800x600?text=no%20image";

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="h-60">
        <img src={imgPath} alt={entry.title} className="w-full object-cover" />
      </figure>
      <div className="card-body">
        <p>{entry.date}</p>
        <h2 className="card-title">{entry.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => setModalContent()}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
