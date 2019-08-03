import TextField from "@material-ui/core/TextField";

import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";

import { messages } from "@cuestion/common";

interface Props {
  handleOnSubmit: any;
  intl: InjectedIntl;
  length: number;
}

const _SessionInput: React.FunctionComponent<Props> = ({
  handleOnSubmit,
  intl,
  length,
}) => {
  const [code, setCode] = React.useState<string>("");

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(
      event.target.value
        .toUpperCase()
        .substring(0, length)
        .replace(/[^A-Z0-9]+/g, ""),
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code.length === length) {
      handleOnSubmit(code);
      setCode("");
    }
  };

  const messageEnter = intl.formatMessage(messages.pressEnter, {});
  const messageEnterLengthCharactersCode = intl.formatMessage(
    messages.enterLengthCharactersCode,
    {
      length,
    },
  );
  const messageSessionCode = intl.formatMessage(messages.sessionCode, {});

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="session-code-input"
        name="code"
        type="text"
        label={messageSessionCode}
        helperText={
          code.length === length
            ? messageEnter
            : messageEnterLengthCharactersCode
        }
        onChange={handleChange()}
        value={code}
        variant="outlined"
      />
    </form>
  );
};

export const SessionInput = injectIntl(_SessionInput);

export default SessionInput;
