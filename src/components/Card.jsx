import { useEffect, useState } from "react";


/**
 * entry = {
 *  id,
 *  timestamp,
 *  title,
 *  image,
 *  content
 * }
 */

import EntryModal from "./EntryModal";


const Card = ({entry}) => {
  const [myEntry, setMyEntry] = useState(null);

  useEffect(() => {
    setMyEntry(entry);
  }, []);

  const imgPath = entry.image || "https://placehold.co/800x600?text=no%20image";

  const showEntry = () => {
    //document.getElementById("entryModal").showModal();
  };

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="h-60">
        <img
          src={imgPath}
          alt="Shoes"
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <p>{entry.date}</p>
        <h2 className="card-title">{entry.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={showEntry}>View</button>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
