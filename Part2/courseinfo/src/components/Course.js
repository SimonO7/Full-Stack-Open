const Course = ({ course }) => {
    return (
      <div>
        {course.map(course => {
          return (
            <div key={course.id}>
              <Header course={course.name} />
              <Content parts={course.parts} />
              <Total exercises={course.parts.map(part => part.exercises)} />
            </div>
          )
        })}
      </div>
    )
  }
  
const Header = ({ course }) => 
    <h2>
      {course}
    </h2>
  
const Total = ({ exercises }) => {
    return (
      <p>
        Total of {exercises.reduce((sum, currentValue) => sum + currentValue)} exercises
      </p>
    )
  }
  
const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>
  
const Content = ({ parts }) => 
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </>

export default Course