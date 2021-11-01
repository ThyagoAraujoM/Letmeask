import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import AdminRoom from "./pages/AdminRoom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import Room from "./pages/Room";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import useToggle from "./hooks/useToggle";

function App() {
  const { theme, toggleTheme } = useToggle();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path='/' exact>
              <Home toggleTheme={toggleTheme} />
            </Route>

            <Route path='/rooms/new'>
              <NewRoom toggleTheme={toggleTheme} />
            </Route>
            <Route path='/rooms/:id'>
              <Room toggleTheme={toggleTheme} />
            </Route>

            <Route path='/Admin/rooms/:id'>
              <AdminRoom toggleTheme={toggleTheme} />
            </Route>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
