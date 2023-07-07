import './App.css';
import Date from './components/Date'
import Output from './components/Output'

function App() {
  return (
    <div className="App">
     <div id='mainWrapper' className='flex justify-center items-center bg-lightGray h-screen pt-[88px] px-4 pb-[238px]'>
      <div id='mainContainer' className='bg-white rounded-[24px_24px_100px_24px] py-12 px-6 max-w-[343px] lg:max-w-full lg:w-[840px] lg:p-[56px] lg:rounded-[24px_24px_200px_24px]'>
        <div id='dateWrapper' className='mb-8 lg:mb-0'>
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
