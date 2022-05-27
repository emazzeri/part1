const Header = ({ course }) => <h1>{course}</h1>;
const Part = ({ part, exercises }) => <p>{part} {exercises}</p>;
const Total = ({ total }) => (<p>Number of exercises: {total}</p>)

const App = () => {
  const course = 'Half Stack application development'
  const summary = [
    { id: 1, part: 'Fundamentals of React', exercises: 10 },
    { id: 2, part: 'Using props to pass data', exercises: 7 },
    { id: 3, part: 'State of a component', exercises: 14 },
  ];
  const numberOfExercises = summary
    .map(i => i.exercises)
    .reduce((a, b) => a + b);

  return (
    <div>
      <Header course={course} />
      {summary.map(part => <Part key={part.id} part={part.part} exercises={part.exercises} />)}
      <Total total={numberOfExercises} />
    </div>
  )
}

export default App