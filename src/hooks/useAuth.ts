import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
// simplifica a criação e utilização da ContextApi
export function useAuth() {
  const value = useContext(AuthContext);
  return value;
}
