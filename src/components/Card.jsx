const Card = () => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="h-60">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <p>23.10.2024</p>
        <h2 className="card-title">My diary entry</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
