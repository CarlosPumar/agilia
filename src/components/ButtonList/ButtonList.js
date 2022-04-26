import Button from '../Button/Button';

const ButtonList = ({ length, handleClick }) => {
  return (
    <>
      {Array.from({ length: length }, (_, i) => i + 1).map((i) => {
        return <Button handleClick={handleClick} id={i} key={i} />;
      })}
    </>
  );
};

export default ButtonList;
