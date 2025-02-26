import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);
 
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        } else {
          alert("Failed to delete user");
        }
      });
  };
  return (
    <div>
      <h2> {users.length} </h2>
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <h3>{user._id}</h3>
          <Link to= {`/update/${user._id}`} >
          <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
      <a href="/">
        <button>Go to Home</button>
      </a>
    </div>
  );
};

export default Users;
