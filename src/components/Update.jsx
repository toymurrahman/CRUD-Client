import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadUsers = useLoaderData();
     const [users] = useState(loadUsers);
    console.log(users);
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);
    
       fetch(`http://localhost:5000/users/${users._id}` , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       })
        
      }
    
    return (
        <div>
            <h2> update info of {users.name} </h2>

            <form onSubmit={handleUpdate} action="">
          <input type="text" name='name' defaultValue={users.name} />
          <br />
          <input type="email" name='email' defaultValue={users.email}  />
          <br />
          <button>Update</button>
        </form>

      <a href="/users">
                <button>Go to Users</button>
            </a>
        </div>
    );
};

export default Update;