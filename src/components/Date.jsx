import React from 'react'
import Arrow from '../assets/images/icon-arrow.svg'

function Date() {
  return (
    <>
      <div id="dateContainer">
        <form>
          <div id="inputContainer" className='flex mb-[48px]'>
            <div id="dayContainer" className='mr-4'>
              <div id="dayLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1'>
                <label htmlFor="day">DAY</label>
              </div>
              <div id="dayInput">
                <input type="number" name='day' placeholder='DD' className='px-4 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px]' />
              </div>
            </div>

            <div id="monthContainer" className='mr-4'>
              <div id="monthLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1'>
                <label htmlFor="month">MONTH</label>
              </div>
              <div id="monthInput">
                <input type="number" name='month' placeholder='MM' className='px-4 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px]' />
              </div>
            </div>

            <div id="yearContainer">
              <div id="yearLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1'>
                <label htmlFor="year">YEAR</label>
              </div>
              <div id="yearInput">
                <input type="number" name='year' placeholder='YYYY' className='pl-4 pr-0 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px]' />
              </div>
            </div>
          </div>

          <div id="submitContainer">
            <button type='submit'>
              <img src={Arrow} alt="Arrow" />
            </button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Date