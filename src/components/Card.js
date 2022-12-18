function Card({ pokemon, handleClick }) {
  const { id, name, src } = pokemon;
  return (
    <div className="card" onClick={() => handleClick(id)}>
        <img src={src} alt={name} />
        <p>{name}</p>
    </div>
  );
}

export default Card;
