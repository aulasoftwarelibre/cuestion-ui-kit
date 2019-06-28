import TextField from "@material-ui/core/TextField";
import * as React from "react";

interface Props {
  handleSubmit: any;
}

const SessionInput: React.SFC<Props> = ({ handleSubmit }) => {
  const [code, setCode] = React.useState<string>("");

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(
      event.target.value
        .toUpperCase()
        .substring(0, 6)
        .replace(/[^a-zA-Z0-9]+/g, "")
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sessionCode: string = e.target[1].value;
    if (sessionCode.length === 6) {
      handleSubmit(sessionCode);
      setCode("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="session-code-input"
        name="code"
        variant="outlined"
        type="text"
        label="Session Code"
        helperText="and press Enter"
        value={code}
        onChange={handleChange()}
      />
    </form>
  );
};

export default SessionInput;
