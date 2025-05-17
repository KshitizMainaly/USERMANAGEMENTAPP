import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserCreateForm from "../components/UserCreateForm";

const CreateUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const handleCreate = (userData) => {
    const newUser = {
      ...userData,
      id: [...new Array(6)]
        .map((ele) => Math.floor(Math.random() * 36).toString(36))
        .join(""), // my own custom  ID generation
    };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Create New User</h1>
      <UserCreateForm onCreate={handleCreate} />
    </div>
  );
};

export default CreateUser;
