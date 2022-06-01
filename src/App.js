import './App.css';


const Person = (props) => {
  return (
    <>
    <h1>First Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = 'Jane';

  return (
    <div className="App">
      <Person name={'Caleb'} lastName="Adoumadje" age={10+13}/>
      <Person name={'Jane'} lastName="Doe" age={15}/>
    </div>
  );
}

export default App;
