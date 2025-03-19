import { useContext } from "react"
import { CheckBoxValue } from "./App";
import "./CheckBox.scss"


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
      <div className='check-box'>
        {checkboxValues.map((value, index) => (
          <label key={index} className='check'>
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
