// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

/*
const Hello = ({name, age}) => {
  //console.log(props)
  //const name = props.name
  //const age = props.age
  //const {name, age} = props
  
  const bornYear = () => new Date().getFullYear() - age

  return (
    <>
      <p>Hello {name}, you are {age} years old </p>
      <p>So you were probably born in {bornYear()}</p>
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
*/

import { useState } from "react"


const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

/*
const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  return (
    <>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text={'plus'} />
      <Button onClick={setToZero} text={'zero'} />
      <Button onClick={decreaseByOne} text={'decrease'} />
    </>
  )
}
*/

const History = (props) => {
  if (props.allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  //console.log(clicks)
  //console.log(setClicks)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(right + updatedLeft)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return(
    <div>
      {left}
      <Button onClick={handleLeftClick} text='Left' />
      <Button onClick={handleRightClick} text='Right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
  
}






export default App
