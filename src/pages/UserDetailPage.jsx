import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UserDetail from "../components/UserDetail";
import { UserOutlined } from "@ant-design/icons";
const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = savedUsers.find((u) => u.id === id);
    setUser(foundUser);
  }, [id]);

  if (!user) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">
        {" "}
        <UserOutlined /> User Details
      </h1>
      <UserDetail user={user} />
    </div>
  );
};

export default UserDetailPage;
