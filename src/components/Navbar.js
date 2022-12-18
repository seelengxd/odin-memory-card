function Navbar({ score, best }) {
  return (
    <nav>
      <h1>Memory Card</h1>
      <p>Score: {score}</p>
      <p>Best: {best}</p>
    </nav>
  );
}

export default Navbar;
