import React from 'react'
import Arrow from '../assets/images/icon-arrow.svg'

function Date() {
  return (
    <>
      <div id="dateContainer">
        <form>

          <div id="dayContainer">
            <div id="dayLabel">
              <label htmlFor="day">Day</label>
            </div>
            <div id="dayInput">
              <input type="number" name='day' placeholder='DD' />
            </div>
          </div>

          <div id="monthContainer">
            <div id="monthLabel">
              <label htmlFor="month">Month</label>
            </div>
            <div id="monthInput">
              <input type="number" name='month' placeholder='MM' />
            </div>
          </div>

          <div id="yearContainer">
            <div id="yearLabel">
              <label htmlFor="year">Year</label>
            </div>
            <div id="yearInput">
              <input type="number" name='year' placeholder='YYYY' />
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