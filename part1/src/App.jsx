// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

const Hello = (props) => {
  console.log(props)
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 +10} />
      <Hello name={name} age={age} />
    </>
  )
}

export default App
