import React, { useEffect, useState } from "react";
import axios from "axios";


function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/users/")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log("No Response");
      });
  }, []);



  return (
    <div>
      {users.map((user) => (
        <p>{user?.name}</p>
      ))}
    </div>
  );
}

export default Users;
