import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./contexts/AuthContext";
import AdminRoom from "./pages/AdminRoom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import Room from "./pages/Room";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/rooms/new' component={NewRoom} />
            <Route path='/rooms/:id' component={Room} />

            <Route path='/Admin/rooms/:id' component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
