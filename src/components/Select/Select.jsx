import React, { useState } from 'react';
import './select.css'
import { Form } from 'react-router-dom';


import { v4 as uuidv4 } from 'uuid';


function Select({ options, tittleSelect, name, setSelectedOption, selectedOption, params }) {
  const [option, setOption] = useState("")
  // const [selectedCompanyId, setSelectedCompanyId] = useState("")


  const handler = (event) => {
    const newselectedOptions = { ...selectedOption };
    newselectedOptions[params] = event.target.value;
    setSelectedOption(newselectedOptions)
    // console.log(newselectedOptions)
    setOption(event.target.value)

    if (params === "companyName") {
      var selectedCompany = ""
      options.map((element) => {

        if (element.name === event.target.value) {
          selectedCompany = element.id
        }

      })
      newselectedOptions["companyId"] = selectedCompany
    }





    setSelectedOption(newselectedOptions)

  }









  return (
    <div >

      <h2>{name}</h2>
      <div className='selectDropdown'>
        <select className='dropdown'

          value={option}
          onChange={(e) => handler(e)}
        >
          <option value="select company">{tittleSelect}</option>
          {options?.map((e) => (
            <option key={uuidv4()} value={e?.name}  >
              {e?.name}
            </option>
          ))}
        </select>



      </div>



    </div>
  )
}



export default Select





































