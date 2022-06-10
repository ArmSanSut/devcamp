import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CountryDetails () {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    console.log(params);
    
    useEffect(() => {
        const fetchData = async () => {
           const data = await axios.get(`https://corona.lmao.ninja/v2/countries/${params.name}`)
           console.log('data',data.data);
           const json =  data.data; //เข้าถึงข้อมูลที่เป็น array
           //console.log('data',json);
           setData(json);
        }
        fetchData();
        console.log('fetch data',fetchData());
     
     
     
      }, []);
    return (
        <div>
            <h1>Country : {params.name}</h1>
            <p>Case Per onemillion : {data.casesPerOneMillion} </p>
            <p>Death Per onemillion : {data.deathsPerOneMillion} </p>
            <p>Test Per onemillion : {data.testsPerOneMillion}</p>
            <p>Population : {data.population} </p>
            <button onClick={()=> navigate('/')}>Back to Future Byeeeee</button>
            
        </div>
    )
}

export default CountryDetails;