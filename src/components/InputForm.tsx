type InputFormProps = {
  item: string;
  onNameChange: (content: string) => void;
  onAdd: () => void;
};

const InputForm = (props: InputFormProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onNameChange(e.target.value);
  };

  const handleOnAdd = () => {
    props.onAdd();
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <button onClick={handleOnAdd}>add</button>
    </div>
  );
};

export default InputForm;
