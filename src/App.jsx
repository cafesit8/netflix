import { Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/public/Welcome";
import { Register } from "./pages/public/Register";
import { LogIn } from "./pages/public/LogIn";
import {Home} from './pages/private/Home'
import { ProtectedRoute } from "./pages/private/ProtectedRoute";
import NotFound from "./pages/public/NotFound";
import ChangeUser from "./pages/private/ChangeUser";
import CreateUser from "./pages/private/CreateUser";
import View from "./pages/private/View";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/:title" element={<View />} />
        <Route path="/changeUser" element={<ChangeUser />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/createUser/:id" element={<CreateUser />} />
      </Route>
    </Routes>
  );
}

export default App;
