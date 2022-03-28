import { Button, TextField } from "@material-ui/core";
import React from "react";

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
    <div style={{display: "flex"}}>
      <TextField
        type="text"
        variant="standard"
        fullWidth
        onChange={handleOnChange}
      />
      <Button onClick={handleOnAdd} variant="text">
        add
      </Button>
    </div>
  );
};

export default InputForm;
