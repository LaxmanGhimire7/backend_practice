import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);

  const getUser = () => {
    axios.get("http://localhost:3000/api/user").then((res) => {
      // console.log(res.data.user)
      setUser(res.data.user);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, age, email, address, phoneNumber } = e.target.elements;
    console.log(fullName, age, email, address, phoneNumber);

    axios
      .post("http://localhost:3000/api/user", {
        fullName: fullName.value,
        age: age.value,
        email: email.value,
        address: address.value,
        phoneNumber: phoneNumber.value,
      })
      .then((res) => {
        console.log(res.data);
        getUser();
      });
  };

  const handleDelete = (userId) =>{
     console.log(userId)
     axios.delete("http://localhost:3000/api/user/"+userId)
     .then(res=>{
      console.log(res.data)
      getUser()
     })
  }

  return (
    <>
      <div className="create-user-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Enter Fullname" />
          <input type="text" name="age" placeholder="Enter age" />
          <input type="email" name="email" placeholder="Enter your email" />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your number"
          />
          <input type="text" name="address" placeholder="Enter your address" />
          <button>Create User</button>
        </form>
      </div>
      <div className="users">
        {user.map((data, idx) => {
          return (
            <div key={idx} className="user">
              <h1>{data.fullName}</h1> <span>{data.age}</span>
              <p>{data.email}</p>
              <p>{data.phoneNumber}</p>
              <p>{data.address}</p>
              <button onClick={()=>{
                handleDelete(data._id)
              }}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
