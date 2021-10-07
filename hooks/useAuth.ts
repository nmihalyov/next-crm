import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const [isAuth, setIsAuth] = useLocalStorage<boolean>('isAuth', false);
  const [user, setUser] = useLocalStorage<Object | null>('user', null);

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