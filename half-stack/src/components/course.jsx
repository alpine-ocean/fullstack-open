const Course = ({ course }) => {
  //console.log('helper2', course)
  return(
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const Header = ({ course }) => {
  //console.log('helper', course);
  return (
  <>
    <h1>{course.name}</h1>
  </>
  )
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map( courseInfo =>
        <p key={courseInfo.id}>{courseInfo.name}: {courseInfo.exercises}</p>
      )}
    </>
  )
}

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce((total, currentValue) => 
    total + currentValue.exercises, 0)
  return (
    <>
      <h4>Total of {totalExercises} exercises</h4>
    </>
  )
}

export default Course