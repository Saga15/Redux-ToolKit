import React from "react";
import { useSelector, } from "react-redux";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { userDelete } from "./Redux/CreateSlice";
function UserList() {
   const dispatch=useDispatch()
  const userAmount = useSelector((state) => state.sagar);
 const handleDelete =(id)=>{
  console.log("idd11",id);
  dispatch(userDelete({id}))
}
   return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userAmount.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => {
                  return handleDelete(item.id);
                }}>Delete</button>
               <Link to={`/edit-user/${item.id}`}><button>Edit</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;
