

import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('User added successfully');
          form.reset();
        }
        else {
          alert('Failed to add user');
        }

      }
    )
  }

  return (
    <>
      
      <h1>CRUD operation</h1>
      <div>
      <form onSubmit={handleSubmit} action="">
          <input type="text" name='name' placeholder="Enter name" />
          <br />
          <input type="email" name='email' placeholder="Enter email" />
          <br />
          <button>Submit</button>
        </form>
      </div>

      <a href="/users">
                <button>Go to Users</button>
            </a>
    </>
  )
}

export default App
