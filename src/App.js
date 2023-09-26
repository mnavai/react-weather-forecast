import Card from '../src/component/Card/Card';
import './App.css';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='top-section'>
      </div>
      <h1 className="heading">EurOrbit</h1>
      <h3 className="sub-heading">European Weather Forecast</h3>
      <h3 className="sub-sub-heading">
        Powered by
        <a
          href="http://www.7timer.info/doc.php?lang=en"
          target="_blank"
          data-toggle="tooltip"
          data-placement="Top"
          data-original-title="Tap to visit 7Timer!"
          rel="noreferrer"
        >
          <span class="keyword-magnet">7Timer!</span>
        </a>
      </h3>
      <div className="weather-cards">
        <Card></Card>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
