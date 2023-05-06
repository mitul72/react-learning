import './App.css';

let name = 'Harry';

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ex a suscipit accusantium consectetur modi ut fugit quam commodi minus placeat atque perspiciatis cumque, eos quis. Fugiat quia molestias dolore voluptatum rem quisquam hic!</p>
    </div>
    </>
  );
}

export default App;
