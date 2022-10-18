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
    <div style={{"margin":"2vw","margin-left":"5vw","gap":"1rem"}} >
      {ParentLogoAdress.map((key)=>(
        <img style={{"border":"solid 0.2px grey","borderRadius":"70px","height":"15vh"}} src={key} name={key} alt=""  onClick={handleClick}  />
      ))}
    </div>
    <div  style={{"backgroundColor":" rgb(212, 235, 255)","width":"100vw"}}>
        <div style={{"margin-left":"20vw"}}>
      {ChilddAdress.map((key)=>(
        <img style={{"border":"solid 0.2px grey","borderRadius":"70px","height":"15vh"}} src={key} alt=""  />
      ))}
      </div>
    </div>
  </section>
}

export default App; 