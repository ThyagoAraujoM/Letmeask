import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import usePersistedState from "../hooks/usePersistedState";
import { DefaultTheme } from "styled-components";

export default function useToggle() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return { theme, setTheme, toggleTheme };
}
