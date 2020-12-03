import { createContext } from "react";

const AuthContext = createContext({
  isLogged: false,
  id: {},
  updateLogStatus: () => {},
  updateIdInfo: () => {},
  handleSubmit: () => {},
  handleChangePassword: () => {},
  handleChangeMail: () => {},
  handleLogout: () => {},
});

export default AuthContext;
