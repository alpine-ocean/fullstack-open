import { useState } from 'react'

const SectionTitle = ( {text} ) => <h2>{text}</h2>
const Button = ( {text, onClick} ) => <button onClick={onClick}>{text}</button>
const Count = ({text, total})=> <p>Number of {text} reviews: {total}</p>
const RunningAverage = ({score, total}) => <p>Running Average: {score/total}</p>
const PercentPositive = ({good, total}) => <p>Percent Positive: {good/total} </p>


const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setScore(score + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setScore(score + 0)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setScore(score - 1)
  }

  if (total > 0) {
    return (
      <>
        <SectionTitle text={'Give Feedback'} />
        <Button onClick={handleGood} text={'Good'} />
        <Button onClick={handleNeutral} text={'Neutral'} />
        <Button onClick={handleBad} text={'Bad'} />
        <SectionTitle text={'Statistics'} />
        <Count text={'good'} total={good} />
        <Count text={'neutral'} total={neutral} />
        <Count text={'bad'} total={bad} />
        <Count text={'ALL'} total={total} /> 
        <RunningAverage score={score} total={total} />
        <PercentPositive good={good} total={total} />
      </>
    )

  } else {
    return (
      <>
        <SectionTitle text={'Give Feedback'} />
        <Button onClick={handleGood} text={'Good'} />
        <Button onClick={handleNeutral} text={'Neutral'} />
        <Button onClick={handleBad} text={'Bad'} />
        <SectionTitle text={'Statistics'} />
      </>
    )

  }
  
}

export default App
