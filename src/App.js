import './App.css';
import logo from './asserts/logo.png';
import Trope from './asserts/Trope.png';
import Award from './asserts/Award.png';
import Instrument from './asserts/Instrument.png';

function App() {
  return (
    <div className="App">
      <div className='logo'>
      <img id='logo' src={logo} alt='Logo'/>
      </div>

      
        <div className='AwardAria'>
            <div className='col-6'>
            <img className='Trope' src={Trope} alt='trope'/>
            </div>
            <div className='col-6'>
            <img className='Award' src={Award} alt='trope'/>
            </div>
        </div>
      
      

      <div className='InstrumentAria'>
            <img className='Instrument' src={Instrument} alt='Instrument'/>
      </div>
    </div>
  );
}

export default App;
