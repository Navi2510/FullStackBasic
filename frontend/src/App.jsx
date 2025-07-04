import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([]);
  const [cnt,setCnt] = useState(0);

  
  // useEffect(callback_function,dependencyArray);
  // []
  // [state_variable]

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log("callback running ....")
  },[]);

  console.log("outside of useEffect")
  return (
    <>
      <h1>Chai aur Full Stack</h1>
      <p>JOKES : {jokes.length}</p>
      {
        jokes.map((joke, index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
      <button onClick={()=> setCnt(cnt+1)}>increment - {cnt}</button>
    </>
  )
}

export default App
