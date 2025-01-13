import { Routes, Route } from "react-router-dom";
import Users from "./components/users";
import UserDetails from "./components/userDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />}></Route>
      <Route path="/users/:id" element={<UserDetails />}></Route>
    </Routes>
  );
}

export default App;