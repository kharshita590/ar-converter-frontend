import React,{useState} from "react";
import axios from 'axios';
import MenuItem from "../menu-item/menu-item";
import Iframe from "react-iframe";
import { useNavigate } from "react-router-dom";
export default function FileUpload(){
    const navigate = useNavigate();
    const [files,setFiles] = useState(null);
    const [msg,setMsg] = useState(null);
    const [progress,setProgress] = useState({started:false,pc:0});
    const [data,setData] = useState([]);
    const [img,setImg] = useState("");
    const [url,setUrl]=useState()

    const uploadFile=async()=>{
        if(!files){
            setMsg("No file uploaded");
            return;
        }
        const fd = new FormData();
        fd.append("file",files[0]);

        try{
            const response = await axios.post('https://ar-converter-backend-2.onrender.com/api',fd,{
                header:{
                    "Content-type":"multipart/form-data",
                },
                onUploadProgress:(progressEvent)=>{
                    setProgress((prevState)=>({
                      ...prevState,
                      pc:Math.round((progressEvent.loaded*100)/progressEvent.total),
                    }));
                },
            });
            setData(response.data);
            setImg(response.data.imgUrl);

            const queryString = `data=${encodeURIComponent(JSON.stringify(response.data.imgUrl))}`;  
            const objectId=response.data.idd
            const url = `https://ar-converter-frontend.vercel.app/model/${objectId}`;  
            console.log(queryString);
            setUrl(url)
            setMsg("Upload completed");
            // navigate(`/model/${objectId}`)
        }catch(error){
            console.log(error);
            setMsg("error occured");
        }
    
        
    }
    return (
        <main>
              <div className="flex flex-col space-y-12 justify-center items-center mt-[12rem]">
        <input
          onChange={(e) => {
            setFiles(e.target.files);
          }}
          type="file"
          className=""
        />
        <button
          onClick={uploadFile}
          className="w-28 h-10 rounded-md font-mono bg-red-300"
        >
          Submit
        </button>
        {progress.started && (
          <progress max="100" value={progress.pc}></progress>
        )}
        {msg && <span>{msg}</span>}
      </div>
      
  <MenuItem 
    androidSource={img}
    iosSource="assets/models/ios/Salmon_tartine.usdz" 
    alternateName="Salmon Tartine" 
  />
     <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Go to Model
      </a>
 <Iframe src={url} width="500px" height="500px"/>
        </main>
    )

}
