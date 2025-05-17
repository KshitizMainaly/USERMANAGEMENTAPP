import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserEditForm from "../components/UserEditForm";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(savedUsers);
    const foundUser = savedUsers.find((u) => u.id === id);
    setUser(foundUser);
  }, [id]);

  const handleUpdate = (updatedData) => {
    const updatedUser = {
      ...user,
      ...updatedData,
    };
    const updatedUsers = users.map((u) => (u.id === id ? updatedUser : u));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/");
  };

  if (!user) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>
      <UserEditForm user={user} onUpdate={handleUpdate} />
    </div>
  );
};

export default EditUser;
