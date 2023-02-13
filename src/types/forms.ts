export interface LoginSignupFormProps {
  handleSignupOrLogin: () => void;
  updateMessage: (msg: string) => void;
}

export interface LoginFormData {
  email: string;
  pw: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  pw: string;
  newPw: string;
  newPwConf: string;
}