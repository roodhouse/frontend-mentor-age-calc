import React from 'react'
import Arrow from '../assets/images/icon-arrow.svg'
import { useForm } from 'react-hook-form'

function TheDate({ userYear, userMonth }) {
  
  const { register, resetField, handleSubmit, formState: {errors} } = useForm({defaultValues: {
    day: '',
    month: '',
    year: ''
}})

function onSubmit() {
  const day = document.getElementById('dayInput').firstChild.value
  const month = document.getElementById('monthInput').firstChild.value
  const year = document.getElementById('yearInput').firstChild.value

  const userDate = [year, month, day]

  const birthDate = new Date(userDate)
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDay = today.getDay()

  // get the year old
  const yearsOld = currentYear - birthDate.getFullYear();

  // get the months old
  let monthsOld = birthDate.getMonth() - currentMonth
  if (monthsOld === -1 ){
    monthsOld = 11
  } else if (monthsOld === -2) {
    monthsOld = 10
  } else if (monthsOld === -3) {
    monthsOld = 9
  } else if (monthsOld === -4) {
    monthsOld = 8
  } else if (monthsOld === -5) {
    monthsOld = 7
  } else if (monthsOld === - 6) {
    monthsOld = 6
  }

  // get the days old *** here need to update algo for days
  const now = Date.now()
  let lastBirthday = [today.getFullYear(), month, day];
  lastBirthday = new Date(lastBirthday).getTime()
  const oneDay = 1000 * 60 * 60 * 24;
  let daysOld = lastBirthday - now 
  daysOld = Math.round(daysOld / oneDay) + 1
  console.log(daysOld)

  userMonth(monthsOld)
  userYear(yearsOld)

}








function onError() {
  console.log('error')
}

  return (
    <>
      <div id="dateContainer">
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
          <div id="inputContainer" className='flex mb-8 lg:mb-0'>
            <div id="dayContainer" className='mr-4 lg:mr-8'>
              <div id="dayLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1 lg:text-sm lg:tracking-[3.5px]'>
                <label htmlFor="day">DAY</label>
              </div>
              <div id="dayInput">
                <input type="number" name='day' placeholder='DD' className='px-4 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1 lg:text-[32px] lg:tracking-[0.32px] lg:px-6 lg:w-[160px] hover:border-purple cursor-pointer' 
                  {...register('day')}
                />
              </div>
              <div id="dayError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center lg:text-left lg:text-sm'>
                <p id='validError' className='hidden'>Must be a valid day</p>
                <p id='reqError' className='hidden'>This field is required</p>
                <p id='fullValidError' className='hidden'>Must be a valid day</p>
              </div>
            </div>

            <div id="monthContainer" className='mr-4 lg:mr-8'>
              <div id="monthLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1 lg:text-sm lg:tracking-[3.5px]'>
                <label htmlFor="month">MONTH</label>
              </div>
              <div id="monthInput">
                <input type="number" name='month' placeholder='MM' className='px-4 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1 lg:text-[32px] lg:tracking-[0.32px] lg:px-6 lg:w-[160px] hover:border-purple cursor-pointer' 
                  {...register('month')}
                />
              </div>
              <div id="monthError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center lg:text-left lg:text-sm'>
                <p id='validError' className='hidden'>Must be a valid month</p>
                <p id='reqError' className='hidden'>This field is required</p>
              </div>
            </div>

            <div id="yearContainer">
              <div id="yearLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1 lg:text-sm lg:tracking-[3.5px]'>
                <label htmlFor="year">YEAR</label>
              </div>
              <div id="yearInput">
                <input type="number" name='year' placeholder='YYYY' className='pl-4 pr-0 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1 lg:text-[32px] lg:tracking-[0.32px] lg:px-6 lg:w-[160px] hover:border-purple cursor-pointer' 
                  {...register('year')}
                />
              </div>
              <div id="yearError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center lg:text-left lg:text-sm'>
                <p id='validError' className='hidden'>Must be in the past</p>
                <p id='reqError' className='hidden'>This field is required</p>
              </div>
            </div>
          </div>

          <div id="submitContainer" className='flex items-center'>
            <div id="lineOneContainer" className='w-[116px] h-[1px] bg-line lg:order-1 lg:w-[316px]'></div>
            <div id='buttonContainer' className='w-16 h-16 bg-purple rounded-[216px] flex justify-center items-center lg:w-24 lg:h-24 lg:order-3 cursor-pointer hover:bg-black'>
              <button type='submit'>
                <img src={Arrow} alt="Arrow" className='h-6 w-6 lg:w-11 lg:h-11' />
              </button>
            </div>
            <div id="lineTwoContainer" className='w-[116px] h-[1px] bg-line lg:order-2 lg:w-[316px]'></div>
          </div>

        </form>
      </div>
    </>
  )
}

export default TheDate