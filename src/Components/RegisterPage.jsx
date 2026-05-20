import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/api";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  };

  const createUser = (event) => {

    event.preventDefault();

    setLoading(true);

    service.post(
      "/api/users/create_user/",
      formData
    )


    .then((res) => {
      console.log(res.data);
      alert(res.data.message);
      setFormData({
        email: "",
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
      });
      setLoading(false);
      navigate("/home");
    })

    .catch((error) => {

      console.log(error);

      setLoading(false);

      if (error.response && error.response.status === 406) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong");
      }

    });

  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  };

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #dff6f4, #f4f7f8)",
      }}
    >

      <div
        style={{
          width: "420px",
          backgroundColor: "white",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#0f766e",
            marginBottom: "8px",
            fontSize: "30px",
          }}
        >
          Create User
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "25px",
            fontSize: "14px",
          }}
        >
          Fill in the details below
        </p>

        <form onSubmit={createUser}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            type="text"
            name="first_name"
            placeholder="Enter First Name"
            value={formData.first_name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="last_name"
            placeholder="Enter Last Name"
            value={formData.last_name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="gender"
            placeholder="Enter Gender"
            value={formData.gender}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="weight"
            placeholder="Enter Weight"
            value={formData.weight}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="height"
            placeholder="Enter Height"
            value={formData.height}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: loading ? "#99c7c2" : "#0f766e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "10px",
              fontWeight: "600",
            }}
          >
            {loading ? "Creating User..." : "Create User"}
          </button>

        </form>

      </div>

    </div>

  );
}

export default RegisterPage;