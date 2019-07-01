import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";

import messages from "../../languages/messages";
import SessionInput from "./SessionInput";

interface Props {
  handleOnSubmit: any;
  intl: InjectedIntl;
  length: number;
}

class SessionInputContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { handleOnSubmit, intl, length } = this.props;

    return (
      <SessionInput
        handleOnSubmit={handleOnSubmit}
        length={length}
        messageEnter={intl.formatMessage(messages.pressEnter, {})}
        messageEnterLengthCharactersCode={intl.formatMessage(messages.enterLengthCharactersCode, { length })}
        messageSessionCode={intl.formatMessage(messages.sessionCode, {})}
      />
    );
  }
}

export default injectIntl(SessionInputContainer);
