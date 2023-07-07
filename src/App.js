import './App.css';
import Date from './components/Date'
import Output from './components/Output'

function App() {
  return (
    <div className="App">
     <div id='mainWrapper' className='bg-lightGray h-screen pt-[88px] px-4 pb-[238px]'>
      <div id='mainContainer' className='bg-white rounded-[24px_24px_100px_24px] py-12 px-6'>
        <div id='dateWrapper' className='mb-8'>
          <Date />
        </div>
        <div id='outputWrapper'>
          <Output />
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
