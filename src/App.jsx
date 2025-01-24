import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import SignUp from "../src/components/Signup";
import LogIn from "../src/components/LogIn";
import TodoList from "../src/components/TodoList";
import ListUpdate from "./components/ListUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route  path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/listupdate" element={<ListUpdate />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;   
