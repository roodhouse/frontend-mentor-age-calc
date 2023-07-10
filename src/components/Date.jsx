import React, { useState } from 'react'
import Arrow from '../assets/images/icon-arrow.svg'
import { useForm } from 'react-hook-form'
import 'animate.css';

function TheDate({ userYear, userMonth, userDay }) {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const animateYear = document.getElementById('userYear')
  const animateMonth = document.getElementById('userMonth')
  const animateDay = document.getElementById('userDay')

  // remove animate on new input
  if (animateDay) {
    const theDay = document.getElementById('dayInput')
    theDay.addEventListener('input', function() {
      animateDay.classList.remove('animate__animated', 'animate__bounceIn')
    })
  }

  if (animateMonth) {
    const theMonth = document.getElementById('monthInput')
    theMonth.addEventListener('input', function() {
      animateMonth.classList.remove('animate__animated', 'animate__bounceIn')
    })
  }

  if (animateYear) {
    const theYear = document.getElementById('yearInput')
    theYear.addEventListener('input', function() {
      animateYear.classList.remove('animate__animated', 'animate__bounceIn')
    })
  }

  

  let dateEntered = [year, month, day]
  dateEntered = new Date(dateEntered)

  const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: {
    day: '',
    month: '',
    year: ''
}})

function onSubmit() {
  const day = document.getElementById('dayInput').firstChild.value
  const month = document.getElementById('monthInput').firstChild.value
  const year = document.getElementById('yearInput').firstChild.value

  const userDate = month + '/' + day + '/' + year

  let birthDate = new Date(userDate)
  const today = new Date()
  const currentMonth = today.getMonth()

  // get the year old
  const dMil = Date.now() - birthDate.getTime()
  const convertAge = new Date(dMil)
  const yearsOld = Math.abs(convertAge.getUTCFullYear() - 1970)

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

  // get days since last bday
  let daysOld;
  function getDays(start, end) {
    const bDay = new Date(start)
    const thisDay = new Date(end)
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = thisDay.getTime() - bDay.getTime()
    const diffInDays = Math.round(diffInTime / oneDay) - 1

    return diffInDays

  }

  let nextBday = month + '/' + day + '/' + today.getFullYear()
  nextBday = new Date(nextBday)
  if (nextBday.getTime() < today.getTime() ) {
    daysOld = getDays(nextBday, today)
  } else {
    let previousYear = today.getFullYear() -1
    nextBday = month + '/' + day + '/' + previousYear
    nextBday = new Date(nextBday)
    daysOld = getDays(nextBday, today)
  }

  // animate the fields
  animateYear.classList.add('animate__animated', 'animate__bounceIn')
  animateMonth.classList.add('animate__animated', 'animate__bounceIn')
  animateDay.classList.add('animate__animated', 'animate__bounceIn')
  
  userDay(daysOld)
  userMonth(monthsOld)
  userYear(yearsOld)
}

function onError(e) {
  
  for (const error in e) {
   // change border color
   const errorBorder = document.getElementById(error+'Input').firstChild;
   errorBorder.style.borderColor = '#FF5959';
   // restore border color when input changes
   errorBorder.addEventListener('input', function(){
      errorBorder.style.borderColor = '#DCDCDC'
   })
  }
}

// check if the day input exceeds the amount of days in a given month
// store the month in state on blur
function dateMonthCheck(e) {
  setMonth(e.target.value)
}
// store the day in state on blur
function dateDayCheck(e) {
  setDay(e.target.value)
}

const leapYears = ["1900", "1904", "1908", "1912", "1916", "1920", "1924", "1928", "1932", "1936", "1940", "1944", "1948", "1952", "1956", "1960", "1964", "1968", "1972", "1976", "1980", "1984", "1988", "1992", "1996", "2000", "2004", "2008", "2012", "2016", "2020"]

// store the year in state on blur
function dateYearCheck(e) {
  setYear(e.target.value)
}
// check feb
if ((month === '2' || month === '02') && (day > '28')) {
  if (year === leapYears.find(leap => leap === year) || year === '') {
    if (day > '29') {
      badDate()
    } 
  } else if (year !== leapYears.find(leap => leap === year) && year !== '') {
    badDate()
  }
} else if ((month === '4' || month === '04' || month === '6' || month === '06' || month === '9' || month === '09' || month === '11') && (day > '30')) {
  badDate()
}

// Check for future dates
if (dateEntered.getTime() >= Date.now()) {
  const submitBtn = document.getElementById('submitBtn')
  const monthValidError = document.getElementById('monthValidError')
  const theUserMonth = document.getElementById('theUserMonth')
  const theUserDay = document.getElementById('theUserDay')
  const theUserYear = document.getElementById('theUserYear')
  
  submitBtn.setAttribute('disabled', "")
  monthValidError.innerHTML = 'This is in the future'

  theUserMonth.addEventListener('input', function() {
    submitBtn.removeAttribute('disabled')
    monthValidError.innerHTML = ''
  })
  theUserDay.addEventListener('input', function() {
    submitBtn.removeAttribute('disabled')
    monthValidError.innerHTML = ''
  })

  theUserYear.addEventListener('input', function(){
    submitBtn.removeAttribute('disabled')
    monthValidError.innerHTML = ''
  })
}

function badDate() {
  const dayValidError = document.getElementById('dayValidError')
  const submitBtn = document.getElementById('submitBtn')
  const theUserMonth = document.getElementById('theUserMonth')
  const theUserDay = document.getElementById('theUserDay')
  const theUserYear = document.getElementById('theUserYear')

  dayValidError.innerHTML = 'Must be a valid date'
  submitBtn.setAttribute('disabled', "")
  theUserDay.style.borderColor = '#FF5959';

  theUserMonth.addEventListener('input', function() {
    submitBtn.removeAttribute('disabled')
    dayValidError.innerHTML = ''
    theUserDay.style.borderColor = '#DCDCDC'
  })
  theUserDay.addEventListener('input', function() {
    submitBtn.removeAttribute('disabled')
    dayValidError.innerHTML = ''
    theUserDay.style.borderColor = '#DCDCDC'
  })

  theUserYear.addEventListener('input', function(){
    submitBtn.removeAttribute('disabled')
    dayValidError.innerHTML = ''
    theUserDay.style.borderColor = '#DCDCDC'
  })


}

  return (
    <>
      <div id="dateContainer">
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
          <div id="inputContainer" className='flex mb-8 lg:mb-0'>
            
            <div id="monthContainer" className='mr-4 lg:mr-8'>
              <div id="monthLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1 lg:text-sm lg:tracking-[3.5px]'>
                <label htmlFor="month">MONTH</label>
              </div>
              <div id="monthInput">
                <input type="number" id='theUserMonth' name='month' min={0} max={12} placeholder='MM' className='px-4 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1 lg:text-[32px] lg:tracking-[0.32px] lg:px-6 lg:w-[160px] hover:border-purple cursor-pointer' 
                  {...register('month', {
                    required: 'This field is required',
                    pattern: {
                      value: /\b([1-9]|(0[1-9])|1[0-2])\b/,
                      message: 'Must be a valid month'
                    },
                    min: {
                      value: 1,
                      message: 'Must be a valid date'
                    },
                    max: {
                      value: 12,
                      message: 'Must be a valid date'
                    },
                    onBlur: (e) => (dateMonthCheck(e))
                  })}
                />
              </div>
              <div id="monthError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center lg:text-left lg:text-sm'>
                <p id='monthValidError' className=''>{errors.month?.message}</p>
                <p id='monthReqError' className='hidden'>This field is required</p>
                <p id='fullValidError' className='hidden'>Must be a valid date</p>
              </div>
            </div>

            <div id="dayContainer" className='mr-4 lg:mr-8'>
              <div id="dayLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1 lg:text-sm lg:tracking-[3.5px]'>
                <label htmlFor="day">DAY</label>
              </div>
              <div id="dayInput">
                <input type="number" name='day' id='theUserDay' min={0} max={31} placeholder='DD' className='px-4 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1 lg:text-[32px] lg:tracking-[0.32px] lg:px-6 lg:w-[160px] hover:border-purple cursor-pointer' 
                  {...register('day', {
                    required: 'This field is required',
                    pattern: {
                      value: /\b([1-9]|(0[1-9])|[12][0-9]|3[01])\b/,
                      message: 'Must be a valid day'
                    },
                    min: {
                      value: 1,
                      message: 'Must be a valid date'
                    },
                    max: {
                      value: 31,
                      message: 'Must be a valid date'
                    },
                    onBlur: (e) => (dateDayCheck(e))
                  })}
                />
              </div>
              <div id="dayError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center lg:text-left lg:text-sm'>
                <p id='dayValidError' className=''>{errors.day?.message}</p>
                <p id='dayReqError' className='hidden'>This field is required</p>
              </div>
            </div>

            <div id="yearContainer">
              <div id="yearLabel" className='font-["Poppins"] text-xs tracking-[3px] font-bold text-gray mb-1 lg:text-sm lg:tracking-[3.5px]'>
                <label htmlFor="year">YEAR</label>
              </div>
              <div id="yearInput">
                <input type="number" name='year' id='theUserYear' placeholder='YYYY' className='pl-4 pr-0 py-3 border border-solid border-line rounded-lg w-[87px] text-black text-[20px] font-["Poppins"] font-bold tracking-[0.2px] mb-1 lg:text-[32px] lg:tracking-[0.32px] lg:px-6 lg:w-[160px] hover:border-purple cursor-pointer' 
                  {...register('year', {
                    required: 'This field is required',
                    min: {
                      value: 1900,
                      message: 'Must be a valid date'
                    },
                    max: {
                      value: 2023,
                      message: 'Must be in the past'
                    },
                    onBlur: (e) => (dateYearCheck(e))
                  })}
                />
              </div>
              <div id="yearError" className=' font-["Poppins"] text-red text-xs italic font-normal h-1 text-center lg:text-left lg:text-sm'>
                <p id='yearValidError' className=''>{errors.year?.message}</p>
                <p id='yearReqError' className='hidden'>This field is required</p>
              </div>
            </div>
          </div>

          <div id="submitContainer" className='flex items-center'>
            <div id="lineOneContainer" className='w-[116px] h-[1px] bg-line lg:order-1 lg:w-[316px]'></div>
            <div id='buttonContainer' className='w-16 h-16 bg-purple rounded-[216px] flex justify-center items-center lg:w-24 lg:h-24 lg:order-3 cursor-pointer hover:bg-black'>
              <button type='submit' id='submitBtn'>
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