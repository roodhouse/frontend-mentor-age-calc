import React from 'react'

function Output() {
  return (
    <>
      <div id="outputContainer">
        
        <div id="userYearContainer" className='flex items-center'>
          <div id="year" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-purple mr-2'>
            <p>38</p>
          </div>
          <div id="yearCopy" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-black'>
            <p>years</p>
          </div>
        </div>

        <div id="userMonthContainer" className='flex items-center'>
          <div id="month" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-purple mr-2'>
            <p>3</p>
          </div>
          <div id="monthCopy" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-black'>
            <p>months</p>
          </div>
        </div>

        <div id="userDayContainer" className='flex items-center'>
          <div id="day" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-purple mr-2'>
            <p>26</p>
          </div>
          <div id="dayCopy" className='font-["Poppins"] text-[56px] italic font-extrabold leading-[110%] tracking-[-1.2px] text-black'>
            <p>days</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Output