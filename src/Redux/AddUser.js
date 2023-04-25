import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userAdded } from "./CreateSlice";

function AddUser() {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "" });
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const users = useSelector((state) => state.sagar.length);

  const handlSubmit = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleClick = () => {
    if (data.name && data.email) {
      let post = { ...data, id: users + 1 };
      dispatch(userAdded(post));
      alert("user Added succesfully....");
      setData({
        name: "",
        email: "",
      });
      setError(null);
      navigate("/");
    } else {
      alert("Enter your Details...");
    }
  };

  return (
    <div>
      <h2>Add-user</h2>
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        value={data.name}
        onChange={handlSubmit}
      />
      <input
        type="text"
        name="email"
        placeholder="enter your email"
        value={data.email}
        onChange={handlSubmit}
      />
      {error && error}
      <button onClick={handleClick}>Add-User</button>
    </div>
  );
}

export default AddUser;
