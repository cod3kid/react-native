import { useContext } from "react";
import AuthContext from "./context";
import { storeUserData, removeUserData } from "../utils/storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (userId) => {
    setUser(userId);
    storeUserData(userId);
  };

  const logOut = () => {
    setUser(null);
    removeUserData();
  };

  return { user, logIn, logOut };
};
