import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (userName) => {
    setUser(userName);
    authStorage.storeUserData(userName);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeUserData();
  };

  return { user, logIn, logOut };
};
