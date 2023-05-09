import React, { useState } from "react";
import axios from "axios";

 const useGetDetails = (id) => { 
   const [nation, setNation] = useState({});

   axios
   .get(`https://nationapp-backend.onrender.com/nations/${id}`)
   .then((response) => {
     setNation(response.data);
   })
   .catch((error) => {
     console.log("axios error", error);
    })

  return nation;
}
export default useGetDetails