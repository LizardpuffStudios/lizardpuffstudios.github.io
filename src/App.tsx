import './App.css';
import Footer from "./components/footer/Footer";
import Lizard from "./assets/icons/tmp/lizard.png";

function App() {
  return (
    <div className="App">
      <div className="App-title">Lizardpuff Studios</div>
      <div className='App-body'>
        <img src={Lizard} alt='Lizardpuff Studios' height="400px" width="auto" />
        <p>Work in progress...</p>
        <p>More stuff</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
