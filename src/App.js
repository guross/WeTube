import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "../src/Components/Menu";
import Navbar from "../src/Components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              {/*  <Route path="/">
                <Route index element={<Home />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
 */}
              <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/signin" index element={<SignIn />} />
                <Route path="/video/:id" index element={<Video />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
