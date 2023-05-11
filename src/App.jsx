import { Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/public/Welcome";
import { Register } from "./pages/public/Register";
import { LogIn } from "./pages/public/LogIn";
import {Home} from './pages/private/Home'
import { ProtectedRoute } from "./pages/private/ProtectedRoute";
import NotFound from "./pages/public/NotFound";
import ChangeUser from "./pages/private/ChangeUser";
import CreateUser from "./pages/private/CreateUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/netflix/register" element={<Register />} />
      <Route path="/netflix/login" element={<LogIn />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/netflix/home" element={<Home />} />
        <Route path="/netflix/changeUser" element={<ChangeUser />} />
        <Route path="/netflix/createUser" element={<CreateUser />} />
        <Route path="/netflix/createUser/:id" element={<CreateUser />} />
      </Route>
    </Routes>
  );
}

export default App;
