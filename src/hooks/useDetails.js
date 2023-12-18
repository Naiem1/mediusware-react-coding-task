import { useState } from "react";

const useDetails = () => {
  const [contact, setContact] = useState(null);

  const handleSetContact = (item) => {
    setContact(item);
  }


  return {
    contact,
    setContact,
    handleSetContact,
  }
}


export default useDetails;