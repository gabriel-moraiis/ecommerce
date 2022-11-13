import { BaseButton, InvertedButton, GoogleSignIn } from './button.styles';

export const BUTTON_TYPES = {
  default: 'default',
  inverted: 'inverted',
  googleSignIn: 'googleSignIn',
};

const getButton = (buttonType = BUTTON_TYPES.default) => {
  switch (buttonType) {
    case BUTTON_TYPES.inverted:
      return InvertedButton;
    case BUTTON_TYPES.googleSignIn:
      return GoogleSignIn;
    default:
      return BaseButton;
  }
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
