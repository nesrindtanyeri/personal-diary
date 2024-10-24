import { useState } from "react";

const Card = ({ entry, setSelectedItem }) => {
  const [isViewing, setIsViewing] = useState(false); // Track view state

  const setModalContent = () => {
    setSelectedItem({ ...entry });
    setIsViewing(true); // When viewing, set to true
  };

  const closeView = () => {
    setIsViewing(false); // Close view mode
  };

  const handleEdit = () => {
    // Handle the edit logic
    console.log("Editing entry:", entry);
  };

  const handleDelete = () => {
    // Handle the delete logic
    console.log("Deleting entry:", entry);
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
          {isViewing ? "View" : "View"}
        </button>
      </div>
    </div>
  </div>
);
}

export default Card;
