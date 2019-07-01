import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";

import messages from "../../languages/messages";
import SessionInputTextField from "./SessionInputTextField";

export interface Props {
  handleOnSubmit: any;
  intl: InjectedIntl;
  length: number;
}

export const SessionInput = injectIntl(
  class extends React.Component<Props> {
    constructor(props: Props) {
      super(props);
    }

    public render() {
      const { handleOnSubmit, intl, length } = this.props;

      return (
        <SessionInputTextField
          handleOnSubmit={handleOnSubmit}
          length={length}
          messageEnter={intl.formatMessage(messages.pressEnter, {})}
          messageEnterLengthCharactersCode={intl.formatMessage(messages.enterLengthCharactersCode, { length })}
          messageSessionCode={intl.formatMessage(messages.sessionCode, {})}
        />
      );
    }
  }
);

export default SessionInput;
