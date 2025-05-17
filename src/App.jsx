import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import UserDetailPage from "./pages/UserDetailPage";
import EditUser from "./pages/EditUser";

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bolder",
            background: "#001529",
            padding: "0 20px",
          }}
        >
          User Management System
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "white",
            }}
          >
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="/users/create" element={<CreateUser />} />
              <Route path="/users/:id" element={<UserDetailPage />} />
              <Route path="/users/edit/:id" element={<EditUser />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
