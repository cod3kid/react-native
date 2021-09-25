import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (userId) => {
    setUser(userId);
    authStorage.storeUserData(userId);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeUserData();
  };

  return { user, logIn, logOut };
};
