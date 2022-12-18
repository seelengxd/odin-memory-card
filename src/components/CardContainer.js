import Card from "./Card";

function CardContainer({ pokemons, handleClick }) {
  const shuffled = pokemons
    .map((pokemon) => {
      return { pokemon, randomValue: Math.random() };
    })
    .sort((a, b) => a.randomValue - b.randomValue)
    .map((values) => values.pokemon);
  return (
    <div className="container">
      {shuffled.map((pokemon) => (
        <Card pokemon={pokemon} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default CardContainer;
