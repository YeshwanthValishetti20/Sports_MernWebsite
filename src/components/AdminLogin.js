import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, notification } from "antd"; // Import Ant Design components
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"; // Import React Icons

const AdminLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate here

  const openSuccessNotification = () => {
    notification.success({
      message: "Login successful",
      description: "Redirecting...",
      duration: 1.5,
      onClose: () => {
        // Navigate to the dashboard page after the notification closes
        navigate("/");
      },
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://kreedacbit.onrender.com/api/auth/admin_login",
       
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Save authentication token and isAdmin status to localStorage
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("isAdmin", data.isAdmin);

        // Use Ant Design notification component for the success toaster
        openSuccessNotification();
      } else {
        // Handle login failure (display an error message, etc.)
        console.error("Login failed:", data.error);
        // You can display an error message here using Ant Design message component
        notification.error({
          message: "Login failed",
          description: data.error,
          duration: 3,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4">Login</h2>
        <div>
          <label>
            UserId:
            <Input
              prefix={<AiOutlineUser />}
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <Input
              prefix={<AiOutlineLock />}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <Button type="primary" onClick={handleLogin}>
            Admin Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
