const Button = ({ handleClick, id }) => {
  return (
    <button onClick={handleClick} id={id}>
      {id}
    </button>
  );
};

export default Button;
