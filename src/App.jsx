import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
