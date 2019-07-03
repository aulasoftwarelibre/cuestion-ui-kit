import TextField from "@material-ui/core/TextField";
import * as React from "react";

interface Props {
    handleOnSubmit: any;
    length: number;
    messageEnter: string;
    messageEnterLengthCharactersCode: string;
    messageSessionCode: string;
}

const SessionInputTextField: React.FunctionComponent<Props> = ({
    handleOnSubmit,
    length,
    messageEnter,
    messageEnterLengthCharactersCode,
    messageSessionCode
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
            handleOnSubmit(sessionCode);
            setCode("");
        }
    };

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

export default SessionInputTextField;
