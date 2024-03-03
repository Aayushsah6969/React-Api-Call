import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navbar';

function App() {
   const [cards, setCard] = useState([]);

   const fetchData = async()=>{
    const aa = await fetch("https://jsonplaceholder.typicode.com/posts") ;
    const data = await aa.json();
    setCard(data);
    console.log(data);
   }

   useEffect(() => {
     fetchData();
   }, [])
   


  return (
    <>
    <Navbar/>
    <div className="containerr">
      {cards.map((card)=>{
        return  <div key ={card.id} className="cardd">
          <h2>{card.title}</h2>
          <p>{card.body}</p>
          <span>BY userID: {card.userId}</span>
        </div>
      })}
     
    </div>
       
    </>
  )
}

export default App
