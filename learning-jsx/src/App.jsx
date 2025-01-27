import './App.css'

function BasicExpressions() {
  const name = "John";
  const age = 25;
  const isAdmin = true;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age next year: {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin status: {String(isAdmin)}</p>
    </div>
  )
}

function ObjectArrayExpressions(){
  const user = {
    name: "Jane",
    email: "jane@example.com"
  }
  const colors = ["red", "blue", "green"];
  const numbers = [1,2,3,4,5];

  return (
    <div>
      <p>User: {user.name} ({user.email})</p>
      <p>First color: {colors[0]}</p>
      <p>Color count: {colors.length}</p>
      
      <p>Doubleds: {
        numbers.map(n => n * 2).join(", ")
      }</p>

      <p>Evens: {
        numbers.filter(n => n%2 === 0).join(", ")
      }
      </p>
    </div>
  )
}

function FunctionExpressions() {
  const getGreeting = (name) => `Hello, ${name}!`;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  }
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };
  const items = [ {id: 1, price: 10}, {id: 2, price: 20}];

  return (
    <div>
      <p>{getGreeting("Alice")}</p>
      <p>Today: {formatDate(new Date())}</p>
      <p>Total: ${calculateTotal(items)}</p>
      <p>Good {(() => {
        const hours = new Date().getHours();
        return hours < 12 ? "morning!":"afternoon!";
      })()}</p>
    </div>
  )
}
function App() {
  return (
    <>
    {/* {JSX Practices} */}
    <h1>JSX</h1>
    <BasicExpressions />
    <br />
    <ObjectArrayExpressions />
    <br />
    <FunctionExpressions />
     <br />
    </>
  )
}

export default App
