import React, { useState, useEffect } from 'react';
import axios from "axios";
import TodosIndex from './TodosIndex';
import CreateBioForm from './CreateBioForm';
import { apiURL } from "../util/apiURL";

export default function Todos() {
  const [Bio, setBio] = useState([]);
  const [error, setError] = useState(null);
  const API = apiURL();

  const fetchBio = async () => {
      try {
          let res = await axios({
            method: "get",
            url: `${API}/api/bio`,
          });
  
          setBio(res.data.Bio);
          setError(null);
      } catch (err) {
          setError(err.message)
          setBio([]);
      }
  };


  useEffect(() => {
    fetchBio();
    return () => {
      
    };
  }, []); 
  return (
    <main>
        {error ? <div>{error}</div> : null}
      <CreateBioForm updateBio={fetchBio} />
      <BioIndex Bio={Bio} />
    </main>
  );
};
