import React,{useState} from 'react';

import ChildAdress from './child.json'
function App() {
  const ParentLogoAdress=[]
  
  for(const key in  ChildAdress){
     ParentLogoAdress.push(key)
  }
  const [ChilddAdress,setChildAdress]=useState(ChildAdress[ParentLogoAdress[0]])

  const handleClick=(event)=>{
    const name=event.target.name
    setChildAdress(ChildAdress[name])
    // setChildAdress(ChildAdress[name])
  }


  return <section >
  <div>
      {ParentLogoAdress.map((key)=>(
        <img   src={key} name={key} alt=""  onClick={handleClick}  />
      ))}
      </div>
    <div  style={{"backgroundColor":" rgb(212, 235, 255)","width":"100vw"}}>
      {ChilddAdress.map((key)=>(
        <img src={key} alt=""  />
      ))}
      </div>
  </section>
}

export default App; 
