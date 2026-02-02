import axios from "axios";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);

  axios.get("http://localhost:3000/api/user").then((res) => {
    // console.log(res.data.user)
    setUser(res.data.user);
  });
  return (
    <>
      <div className="users">
        {user.map((data,idx) => {
          return (
            <div key={idx} className="user">
              <h1>{data.fullName}</h1> <span>{data.age}</span>
              <p>{data.email}</p>
              <p>{data.phoneNumber}</p>
              <p>{data.address}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
