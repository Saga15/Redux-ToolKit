import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { userEdit } from "./CreateSlice";

function EditUser() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const params = useParams()
  console.log("params",params);
  const user = useSelector((state)=>state.sagar.find((item)=>item.id == params.id))
  console.log("user", user);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ name: user.name , email:user.email });


  const handlSubmit = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleClick = () => {
    let post = { ...data, id: params.id };
    dispatch(userEdit(post))
    navigate("/")
  };

  return (
    <div>
      <h2>EditUser</h2>
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
      <button onClick={handleClick}>Edit</button>
    </div>
  );
}

export default EditUser;
