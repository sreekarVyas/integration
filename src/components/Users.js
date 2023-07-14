import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/users/")
    .then((response) => {
      console.log(response);
      setUsers(response.body);
    })
    .catch((err) => {
      console.log("No Response")
    })
  });
  return (
    <>
      {users.map((user) => {
        <p>{user?.name}</p>;
      })}
    </>
  );
}

export default Users;
