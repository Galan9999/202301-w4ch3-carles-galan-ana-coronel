interface KeyProp {
  number: string;
  action: (value: string) => void;
}

const Key = ({ number, action }: KeyProp): JSX.Element => {
  return (
    <li>
      <button
        className={`key ${isNaN(+number) ? " big" : ""}`}
        onClick={() => action(number)}
      >
        {number}
      </button>
    </li>
  );
};

export default Key;
