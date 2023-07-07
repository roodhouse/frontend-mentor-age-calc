import React from 'react'
import Arrow from '../assets/images/icon-arrow.svg'

function Date() {
  return (
    <>
      <div id="dateContainer">
        <form>
          <div id="inputContainer" className='flex mb-8'>
            <div id="dayContainer" className='mr-4'>
              <div id="dayLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1'>
                <label htmlFor="day">DAY</label>
              </div>
              <div id="dayInput">
                <input type="number" name='day' placeholder='DD' className='px-4 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1' />
              </div>
              <div id="dayError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center'>
                <p id='validError' className='hidden'>Must be a valid day</p>
                <p id='reqError' className='hidden'>This field is required</p>
                <p id='fullValidError' className='hidden'>Must be a valid day</p>
              </div>
            </div>

            <div id="monthContainer" className='mr-4'>
              <div id="monthLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1'>
                <label htmlFor="month">MONTH</label>
              </div>
              <div id="monthInput">
                <input type="number" name='month' placeholder='MM' className='px-4 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1' />
              </div>
              <div id="monthError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center'>
                <p id='validError' className='hidden'>Must be a valid month</p>
                <p id='reqError' className='hidden'>This field is required</p>
              </div>
            </div>

            <div id="yearContainer">
              <div id="yearLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1'>
                <label htmlFor="year">YEAR</label>
              </div>
              <div id="yearInput">
                <input type="number" name='year' placeholder='YYYY' className='pl-4 pr-0 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1' />
              </div>
              <div id="yearError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center'>
                <p id='validError' className='hidden'>Must be in the past</p>
                <p id='reqError' className='hidden'>This field is required</p>
              </div>
            </div>
          </div>

          <div id="submitContainer" className='flex items-center'>
            <div id="lineOneContainer" className='w-[116px] h-[1px] bg-line'></div>
            <div id='buttonContainer' className='w-16 h-16 bg-purple rounded-[216px] flex justify-center items-center'>
              <button type='submit'>
                <img src={Arrow} alt="Arrow" className='h-6 w-6' />
              </button>
            </div>
            <div id="lineTwoContainer" className='w-[116px] h-[1px] bg-line'></div>
          </div>

        </form>
      </div>
    </>
  )
}

export default Date