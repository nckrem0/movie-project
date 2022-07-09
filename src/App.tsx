import { Routes, Route } from "react-router-dom";
import GlobalStyle from "GlobalStyle";
import Home from "pages/Home/Home";
import Movie from "pages/Movie";
import MainTemplate from "template/MainTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route path="movies/:movieId" element={<Movie />} />

          <Route index element={<Home />} />

        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
