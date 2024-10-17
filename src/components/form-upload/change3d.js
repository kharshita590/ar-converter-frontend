// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import MenuItem from "../menu-item/menu-item";
// import { useLocation } from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
// import Iframe from 'react-iframe';
// export default function Change3d(){
//     const [searchParams] = useSearchParams();
//     const location = useLocation();
//     const { data } = location.state || {}; 
//     // const data = searchParams.get('data') ? JSON.parse(decodeURIComponent(searchParams.get('data'))) : null;
//     // console.log(data)
//     return (
//         <main>
//              <MenuItem 
//     androidSource={data}
//     iosSource="assets/models/ios/Salmon_tartine.usdz" 
//     alternateName="Salmon Tartine" 
//   />

//         </main>
//     )
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from "../menu-item/menu-item";
import { useParams } from "react-router-dom";  

export default function Change3d() {
  const { id } = useParams();  
  const [modelUrl, setModelUrl] = useState(null);

  useEffect(() => {
  
    const fetchModel = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/model/${id}`);
        setModelUrl(response.data.imgUrl);
      } catch (error) {
        console.error("Error fetching the model:", error);
      }
    };

    fetchModel();
  }, [id]);

  return (
    <main>
      {modelUrl ? (
        <MenuItem 
          androidSource={modelUrl}  
          iosSource="assets/models/ios/Salmon_tartine.usdz" 
          alternateName="Salmon Tartine" 
        />
      ) : (
        <p>Loading model...</p>
      )}
    </main>
  );
}
