const handleEvent = (name, e) => {
  console.log(name, e);
};

// eslint-disable-next-line react/prop-types
const Button = ({ name }) => (
  <button
    onClick={(e) => handleEvent(name, e)}
    // onMouseEnter={() => handleEvent(name, "onMouseEnter")}
    // onDoubleClick={() => handleEvent(name, "onDoubleClick")}
    // onContextMenu={() => handleEvent(name, "onContextMenu")}
  >
    {name}
  </button>
);

export default Button;
