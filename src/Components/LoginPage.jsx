import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/api";

function LoginPage() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {

    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });

  };

  const loginUser = (event) => {

    event.preventDefault();

    service.post(
      "/api/users/login_user/",
      loginData
    )

    .then((res) => {

      console.log(res.data);

      alert("Login Successful");
      navigate("/home");

    })

    .catch((error) => {

      console.log(error);

      alert("Invalid Credentials");

    });

  };
  const inputStyle = {
    padding: "10px",
    width: "260px",
    marginBottom: "14px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color:"teal",
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login</h1>

      <form onSubmit={loginUser} style={formStyle}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          style={inputStyle}
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  );
}

export default LoginPage;