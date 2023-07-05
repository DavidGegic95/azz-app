import React from 'react';
import './select.css'
import { Form } from 'react-router-dom';


import { v4 as uuidv4 } from 'uuid';


function Select({ options, tittleSelect, name }) {


  console.log(options);










  return (
    <div >

      <h2>{name}</h2>
      <div className='selectDropdown'>
        <select className='dropdown'

          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="select company">{tittleSelect}</option>
          {options?.map((e) => (
            <option key={uuidv4()} value={e?.name}>
              {e?.name}
            </option>
          ))}
        </select>

        {/* <br></br>
        <h2>Fill Reports Detail</h2>
        <div>
          <select className='dropdown'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Phase</option>
            {phases.map((phase) => (
              <option key={phase.value} value={phase.value}>
                {phase.label}
              </option>
            ))}
          </select>
        </div> */}

        {/* <div>
          <select className='dropdown'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Status</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}

          </select>
        </div> */}

      </div>



    </div>
  )
}



export default Select





































