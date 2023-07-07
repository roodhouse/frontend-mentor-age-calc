import React from 'react'

function Output({ year, month, day }) {
  return (
    <>
      <div id="outputContainer">
        
        <div id="userYearContainer" className='flex items-center'>
          <div id="year" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-purple mr-2 lg:text-[104px] lg:tracking-[-2.08px]'>
            <p id='userYear'>{year}</p>
          </div>
          <div id="yearCopy" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-black lg:text-[104px] lg:tracking-[-2.08px]'>
            <p>years</p>
          </div>
        </div>

        <div id="userMonthContainer" className='flex items-center'>
          <div id="month" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-purple mr-2 lg:text-[104px] lg:tracking-[-2.08px]'>
            <p id='userMonth'>{month}</p>
          </div>
          <div id="monthCopy" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-black lg:text-[104px] lg:tracking-[-2.08px]'>
            <p>months</p>
          </div>
        </div>

        <div id="userDayContainer" className='flex items-center'>
          <div id="day" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-purple mr-2 lg:text-[104px] lg:tracking-[-2.08px]'>
            <p id='userDay'>{day}</p>
          </div>
          <div id="dayCopy" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-black lg:text-[104px] lg:tracking-[-2.08px]'>
            <p>days</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Output