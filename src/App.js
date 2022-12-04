import './App.css';
import logo from './asserts/logo.png';
import Trope from './asserts/Trope.png';
import Award from './asserts/Award.png';
import Instrument from './asserts/Instrument.png';
import { FaFacebook } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { ImSphere } from "react-icons/im";

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
            <div className='Award-right'>
              <p>C.R.I.PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
              <p>
                <li>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Service Limited) to replace the old inefficient pumps With 5 Star rated energy efficient smart pumps With IoT enabled control panel.</li>
              </p>
            <img className='Award' src={Award} alt='trope'/>
            <p>Government of india has awarded the <b>"National Energy Conservation Award 2018"</b>.Mr.G.Selvaraj.Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri, Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
          <p className='online'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTEY RESULTING IN A CUMULATIVE SABING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</p>

      <div className='InstrumentAria'>
            <img className='Instrument' src={Instrument} alt='Instrument'/>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            <hr/>
      </div>

      <div>
        <p><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
        <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
      </div>

      <div className='footer'>
       <div className='iconAria'>
       <ul><a>< ImPhone className='icon' />Toll Free 1800 2001234</a></ul>
      <ul><a><FaFacebook className='icon'/>www.facebook.com/cripumps</a></ul>
      <ul><a><ImSphere className='icon'/>www.crigroups.com</a></ul>
       </div>
      <footer className='footer' >Shorif Uddin &copy;-2022</footer>
      </div>
    </div>
  );
}

export default App;
