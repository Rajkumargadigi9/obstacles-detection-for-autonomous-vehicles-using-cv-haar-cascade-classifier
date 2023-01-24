import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Start from "./Start";
import Quiz from "./Quiz";
import Result from "./Result";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Start />} />
            <Route path="Quiz" element={<Quiz />} />
            <Route path="Result" element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
