import { Card, Tag, Button } from "antd";
import { useNavigate } from "react-router-dom";

const UserDetail = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Card
      title="User Details"
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Back to List
        </Button>
      }
      className="max-w-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">User ID:</p>
          <p>{user.id}</p>
        </div>
        <div>
          <p className="font-semibold">Username:</p>
          <p>{user.username}</p>
        </div>
        <div>
          <p className="font-semibold">First Name:</p>
          <p>{user.firstName}</p>
        </div>
        <div>
          <p className="font-semibold">Last Name:</p>
          <p>{user.lastName}</p>
        </div>
        <div>
          <p className="font-semibold">User Type:</p>
          <Tag color={user.userType === "Admin" ? "green" : "gold"}>
            {user.userType}
          </Tag>
        </div>
        <div>
          <p className="font-semibold">Department:</p>
          <p>{user.department}</p>
        </div>
      </div>
    </Card>
  );
};

export default UserDetail;
