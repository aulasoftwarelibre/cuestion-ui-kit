import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import messages from "../../languages/messages";

interface Props {
  handleSubmit: any;
  length?: number;
}

const SessionInput: React.FunctionComponent<Props> = ({
  handleSubmit,
  length = 4
}) => {
  const [code, setCode] = React.useState<string>("");

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(
      event.target.value
        .toUpperCase()
        .substring(0, length)
        .replace(/[^A-Z0-9]+/g, "")
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sessionCode: string = e.target[1].value;
    if (sessionCode.length === length) {
      handleSubmit(sessionCode);
      setCode("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="session-code-input"
        name="code"
        type="text"
        label={<FormattedMessage {...messages.sessionCode} />}
        helperText={
          code.length === length
            ? "and press ENTER."
            : `Enter ${length} characters code.`
        }
        onChange={handleChange()}
        value={code}
        variant="outlined"
      />
    </form>
  );
};

export default SessionInput;
