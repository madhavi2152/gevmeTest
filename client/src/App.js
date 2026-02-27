import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [formData, setFormData] = useState({firstName:"",lastName:"",email:""});
  const [users, setUsers]=useState([]);
  const isValidEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };
  function handleSubmit(e){
    e.preventDefault();
    if(!isValidEmail(formData.email)){
      alert("Invalid email");
      return;
    };
    if(users.some(user=>user.email===formData.email)){
      setUsers((prevUsers)=>prevUsers.map(user=>user.email===formData.email?{...user,sumbmisionCount:user.sumbmisionCount+1}:user));
    }else{
      setUsers((prevUsers)=>[...prevUsers,
        {firstName:formData.firstName,
          lastName:formData.lastName,
          email:formData.email,
          sumbmisionCount:1,
        }
      ]);
    };
    setFormData({firstName:"",lastName:"",email:""});
    console.log(users);
    console.log(formData);
  }

  return (
    <>
    <div className="App">
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e)=>setFormData({...formData,firstName:e.target.value})}/>
      <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e)=>setFormData({...formData,lastName:e.target.value})}/>
      <input type="email" placeholder="Email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
      <button type="submit">Submit</button>
     </form>
    </div>
    <div>
      <h1>Table</h1>
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Sumbmision Count</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user)=>(
              <tr key={user.email}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.sumbmisionCount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
