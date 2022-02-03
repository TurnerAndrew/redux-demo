import './App.css';
import Name from './components/Name'
import Age from './components/Age'
import Location from './components/Location'
import Details from './components/Details'

function App() {
  return (
    <div id='main'>
      <div id='input-container' className='main-container'>
        <Name />
        <Age/>
        <Location/>
      </div>
      <div id='details-container' className='main-container'>
        <Details/>
      </div>
    </div>
  );
}

export default App;
