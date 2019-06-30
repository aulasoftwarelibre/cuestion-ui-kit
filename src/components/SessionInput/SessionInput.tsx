import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";

import messages from "../../languages/messages";

interface Props {
  handleSubmit: any;
  intl: InjectedIntl;
  length?: number;
}

const SessionInput: React.FunctionComponent<Props> = ({
  handleSubmit,
  intl,
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
        label={intl.formatMessage(messages.sessionCode, {})}
        helperText={
          code.length === length
            ? intl.formatMessage(messages.pressEnter, {})
            : intl.formatMessage(messages.enterLengthCharactersCode, { length })
        }
        onChange={handleChange()}
        value={code}
        variant="outlined"
      />
    </form>
  );
};

export default injectIntl(SessionInput);
