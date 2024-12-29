import { useContext, useState } from "react"
import { CheckBoxValue } from "./App";



  export default function CheckBox()  {
    // CheckBox.stopPropagation();
    const checkboxValues = ['EMF 5','Writing','Ultraviolet','Freezing','DOTs','Ghost Orbs','Spirit Box'];

   
    const checkBoxValue = useContext(CheckBoxValue);
      if (checkBoxValue === undefined){
        return(null)
      } 
    const {selectedItems: selectedItems, setSelectedItems: setSelectedItems} = checkBoxValue;

 
   
    const handleCheckboxChange = (value: string) => {
      
      setSelectedItems((prevSelectedItems) => {
        if (prevSelectedItems.includes(value)) {
          return prevSelectedItems.filter((item) => item !== value);
        } else {
          return [...prevSelectedItems, value];
        }
      });
    };
 
    return (
      <div className='checkBox'>
        {checkboxValues.map((value, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={value}
              onClick={(e) => e.stopPropagation()} 
              onChange={() => handleCheckboxChange(value)}
              checked={selectedItems.includes(value)}
            />
            {value}
          </label>
        ))}
      </div>
    );
  };
