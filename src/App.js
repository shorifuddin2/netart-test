import './App.css';
import logo from './asserts/logo.png';
import Trope from './asserts/Trope.png';
import Award from './asserts/Award.png';
import Instrument from './asserts/Instrument.png';

function App() {
  return (
    <div className="Container">
      <div className='logo'>
      <img className='logo' src={logo} alt='Logo'/>
      </div>

      
        <div className='AwardAria'>
            <div className='col-6'>
            <img className='Trope' src={Trope} alt='trope'/>
            </div>
            <div className='Awa'>
              <p>C.R.I.PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
              <p>
                <ol>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</ol>
                <ol>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Service Limited) to replace the old inefficient pumps With 5 Star rated energy efficient smart pumps With IoT enabled control panel.</ol>
              </p>
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
