
import './App.css';
import logo from './images/logo.png'
import Body from './components/Body/Body';
import Summary from './components/Summary/Summary';
function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <header className='header-section'>
          <img src={logo} alt="" />
          <h2>Cricket Skill Activity </h2>
        </header>
        <h3>Cricate Skill-up Practice </h3>
        <div>
          <Body></Body>
        </div>
      </div>
      <div className='summary-container'>
        <Summary></Summary>
      </div>
    </div>
   
  );
}

export default App;
