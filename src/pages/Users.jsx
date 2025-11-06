import { useState, useEffect } from "react";
import { Button, Input, message } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import UserTable from "../components/UserTable";

const { Search } = Input;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  //  it helps Load users from localStorage on component mount
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      // just Default users if none in localStorage
      const defaultUsers = [
        {
          id: [...new Array(7)]
            .map((ele) => Math.floor(Math.random(36) * 36).toString(36))
            .join(""),
          firstName: "kshitiz",
          lastName: "mainaly",
          username: "justAtryingHardGuy",
          userType: "Admin",
          department: "Backend",
        },
        {
          id: [...new Array(7)]
            .map((ele) => Math.floor(Math.random(36) * 36).toString(36))
            .join(""),
          firstName: "Kishor",
          lastName: "Xetri",
          username: "justAbeautifullGuy",
          userType: "System",
          department: "Backend",
        },
        {
          id: [...new Array(7)]
            .map((ele) => Math.floor(Math.random(36) * 36).toString(36))
            .join(""),
          firstName: "mausam",
          lastName: "thapa",
          username: "justACoolLooingGuy",
          userType: "System",
          department: "Backend",
        },
      ];
      setUsers(defaultUsers);
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    message.success("User has been deleted successfully!");
  };

  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // each time after setting user i'm gonna make sure to add to loaal storage so it gets udpated
    message.success("user has been added successfully!");
    navigate("/");
  };

  const handleUpdateUser = (userId, updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? updatedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    message.success("User updated successfully");
    navigate("/");
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((val) =>
      val.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/users/create")}
        >
          Add User
        </Button>
      </div>

      <div className="mb-6">
        <Search
          placeholder="Search users..."
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-1/2"
        />
      </div>

      <UserTable
        users={filteredUsers}
        onDelete={handleDelete}
        onUpdateUser={handleUpdateUser}
      />
    </div>
  );
};

export default Users;
