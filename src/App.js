import React,{useState,useEffect} from 'react';
import ChildAdress from './child.json';
import  'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
 

function App() {
  const ParentLogoAdress=[]
  for(const key in  ChildAdress){
     ParentLogoAdress.push(key)
  }
  const [ChilddAdress,setChildAdress]=useState(ChildAdress[ParentLogoAdress[0]])

  const handleClick=(event)=>{
    const name=event.target.name
    setChildAdress(ChildAdress[name])
  }
  const handlefocus=()=>{
    console.log("hello");
  }
  useEffect(() => {
    var i=1;
  setTimeout(() => {
    const interval = setInterval(() => {
      if(i>ParentLogoAdress.length-1){
        i=0;
      }
      setChildAdress(ChildAdress[ParentLogoAdress[i]])

      i++
      }, 1500);
    
      return () => clearInterval(interval);
  }, 100);
  
  }, []);
 
  return (<section>
    <Carousel style={{"position":"absolute","top":"-60px","left":"0px","height":"300px","width":"100vw"}}>
    {ParentLogoAdress.map((key)=>{
      return <Carousel.Item 
      interval={900}
      onFocus={handlefocus}>
      
      <img   
      name={key}   
      onClick={handleClick}
        className="d-block w-500"
        alt="First slide"
        src={key} 
        style={{"width":"7%"}}
        />
      </Carousel.Item>}
      )}
    </Carousel>

    <div   className='child'  style={{"width":"100vw","height":"100px","margin-top":"100px","backgroundColor":" rgb(212, 235, 255)"}}>
      {ChilddAdress.map((key)=>(
      <img  src={key}    alt=""  /> 
      ))}
    </div>
    </section>
  );
}

export default App;
