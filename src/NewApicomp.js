import React , {useEffect,useState} from 'react'
import axios from 'axios';
import Apidata from './Apidata';

const NewApicomp=()=>{
  const[myData,setMydata]=useState([]);
  
  const fetchApi=async ()=>{
  const {data}=await axios.get('https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=10&page=1&_embed');
  console.log(data)
   setMydata(data)
  }

  useEffect(()=>{
      fetchApi();
  },[])

 return(
     <div>
        <p>{myData ? <Apidata workdata={myData} />:"" }</p>
     </div>
 )
}
export default NewApicomp;