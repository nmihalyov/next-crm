import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const [isAuth, setIsAuth] = useLocalStorage('isAuth', false);
  const [user, setUser] = useLocalStorage('user', null);

  const logout = (): void => {
    setIsAuth(false);
    setUser(null);
  };

  const login = (user: Object): void => {
    setIsAuth(true);
    setUser(user);
  };

  return {
    isAuth,
    user,
    logout,
    login
  }
};

export default useAuth;