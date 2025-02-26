

import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  }

  return (
    <>
      
      <h1>CRUD operation</h1>
      <div>
      <form onSubmit={handleSubmit} action="">
          <input type="text" name='name' placeholder="Enter name" />
          <input type="email" name='email' placeholder="Enter email" />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
