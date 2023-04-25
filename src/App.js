import "./App.css";
import UserList from "./UserList";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddUser from "./Redux/AddUser";
import EditUser from "./Redux/EditUser";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
