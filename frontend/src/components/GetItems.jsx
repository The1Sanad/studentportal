import React, { useState } from 'react';
import axios from 'axios';
import '../css/GetItems.css'; // Import the CSS file

const GetItems = () => {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const getItems = () => {
    axios
      .get(process.env.REACT_APP_API_ENDPOINT)
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg('Error retrieving data');
      });
  };

  return (
    <div>
      <button onClick={getItems}>Get User</button>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.id} || {user.name}</h4>
        </div>
      ))}
      {errorMsg && <h3 className="error">{errorMsg}</h3>}
    </div>
  );
};

export default GetItems;