import { useState } from "react";
export const useInput = (initialInputValue) => {
  const [value, setValue] = useState(initialInputValue);

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return{value, onChange: handleChange}
 }