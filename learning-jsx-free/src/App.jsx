import "./App.css";
import ButtonA from "./ButtonA";
import ButtonB from "./ButtonB";

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
  );
}

function ObjectArrayExpressions() {
  const user = {
    name: "Jane",
    email: "jane@example.com",
  };
  const colors = ["red", "blue", "green"];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>
        User: {user.name} ({user.email})
      </p>
      <p>First color: {colors[0]}</p>
      <p>Color count: {colors.length}</p>

      <p>Doubleds: {numbers.map((n) => n * 2).join(", ")}</p>

      <p>Evens: {numbers.filter((n) => n % 2 === 0).join(", ")}</p>
    </div>
  );
}

function FunctionExpressions() {
  const getGreeting = (name) => `Hello, ${name}!`;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };
  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
  ];

  return (
    <div>
      <p>{getGreeting("Alice")}</p>
      <p>Today: {formatDate(new Date())}</p>
      <p>Total: ${calculateTotal(items)}</p>
      <p>
        Good{" "}
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? "morning!" : "afternoon!";
        })()}
      </p>
    </div>
  );
}
function getUserContent(userStatus) {
  return userStatus === "admin" ? (
    <>
      <h2>Admin Dashboard</h2>
      <button>Manage Users</button>
    </>
  ) : userStatus === "member" ? (
    <p>Welcome to the community!</p>
  ) : (
    <a href="/signup">Sign up here</a>
  );
}

const hasMessages = true;
const message = null;

function App() {
  const styleA = {
    color: "darkred",
    textDecoration: "underline",
  };
  const styleB = {
    color: "navy",
    textDecoration: "underline",
  };
  const isPrimary = true;
  //
  const divStyle = {
    backgroundColor: "lightblue",
    margin: "12px",
    padding: "20px",
    borderRadius: "8px",
  };

  const books = [
    { id: 1, title: "React Basisc", published: true, publisher: "Manning" },
    { id: 2, title: "Advanced Hooks", published: false, publisher: "OReilly" },
    { id: 3, title: "JSX in Depth", published: true, publisher: "Packt" },
  ];

  const publisheds = books.filter((book) => book.published);

  const isLoggedIn = false;
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <h1>JSX</h1>
      {/*  */}
      <ButtonA />
      <ButtonB />
      {/*  */}
      <div style={isPrimary ? styleA : styleB}>
        This text has dynamic styling.
      </div>
      <span
        style={{
          fontSize: isPrimary ? "1.5em" : "1em",
          opacity: isPrimary ? 1 : 0.5,
        }}
      >
        So does this text.
      </span>
      {/*  */}
      <div style={divStyle}>DIV 1</div>
      <div
        style={{
          ...divStyle,
          backgroundColor: "lightgreen",
          color: "darkblue",
          fontWeight: "bold",
        }}
      >
        DIV 2
      </div>
      {/*  */}
      <span
        style={{
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      ></span>
      {/*  */}
      <label htmlFor="">Username:</label>
      <input
        type="text"
        id="username"
        className="input-field"
        autoComplete="off"
        maxLength={20}
        spellCheck={true}
        readOnly={false}
        tabIndex={0}
      />
      {/*  */}
      {publisheds.length > 0 && <h2>Published Books</h2>}
      {publisheds.length ? (
        publisheds.map((book) => (
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em> - {book.publisher}</em>
          </article>
        ))
      ) : (
        <p>No published books found.</p>
      )}
      {/*  */}
      {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}
      {isLoggedIn ? (
        <>
          <h2>Welcome back!</h2>
          <p>You are logged in. Enjoy your time here!</p>
        </>
      ) : (
        <>
          <h2>Hello, Guest!</h2>
          <p>Please log in to access more features.</p>
        </>
      )}
      {/*  */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      {/*  */}
      {hasMessages && <h2>You have new messages!</h2>}
      {message && <p>Message: {message}</p>}
      <p>Message: {message ?? <em>No message</em>}</p>
      <p>Message: {message || <em>Empty</em>}</p>
      {/*  */}
      {getUserContent("admin")}
      {/*  */}
      <BasicExpressions />
      <br />
      <ObjectArrayExpressions />
      <br />
      <FunctionExpressions />
      <br />
    </>
  );
}

export default App;
