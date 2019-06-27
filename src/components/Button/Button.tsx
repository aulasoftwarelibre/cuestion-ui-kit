import * as React from "react";
import StyledButton from "./styled/StyledButton";

export interface ButtonProps {
  /** Callback function to be called when user clicks on button */
  onClick: () => void;
  children: React.ReactNode;
  /** Renders a disabled button and prevents onClick */
  disabled?: boolean;
}

const Button = ({
  children,
  disabled = false,
  onClick
}: ButtonProps): JSX.Element => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
