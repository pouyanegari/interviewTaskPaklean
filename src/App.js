import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewUser from "./Components/AddNewUser/AddNewUser";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import UsersList from "./Components/UsersList/UsersList";
import EditUser from "./Components/EditUser/EditUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/add-user" element={<AddNewUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
