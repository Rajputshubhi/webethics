import React ,{useState} from 'react';

// const getLocaldata=()=>{
//   const list=localStorage.getItem('my-api');
//   if(list){
//     return JSON.parse(list);
//   }
//   else{
//     return[];
//   }
// }

const Apidata =({workdata})=>{

  
  // console.log(workdata)
   
  const[apistate,setApistate]=useState(1);

  const resData=workdata.slice(0,apistate);
  console.log(resData)

   const ToggleData=()=>{
     if(apistate === 10){
        return setApistate(1);
     }
     setApistate(apistate+1);
   }

  //  useEffect(()=>{
  //   localStorage.setItem('my-api',JSON.stringify(apistate))
  //  },[apistate]);

  return(
    <div>
      <h1 style={{color:"orange"}}>API DATA</h1>
      <div>
        {
          resData.map((item,index)=>(
               <div key={item.id}>
                    <p className="api-class"> ID :{item.id} , DATE : {item.date} , format: {item.format} , Ping-Status : {item.ping_status} , title: {item.title.rendered} , Author name:  {item.uagb_author_info.display_name}</p>
                    
               </div>
          ))
        }
      </div>
      <button className="btn-data" onClick={ToggleData}>LOAD MORE...</button>
      <button onClick={()=>{setApistate([])}} className="remove-class">REAMOVE ALL</button>
     </div>
  )
}
export default Apidata;