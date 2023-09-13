import React, { useEffect, useState } from "react";
import "./Users.css";
import { User } from "./User";

export const Users = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((datas) => {
        setUser(datas);
      });
    });
  }, []);

  return (
    <div className="main">
      {users.map((user) => {
        return <User user={user} />;
      })}
    </div>
  );
};
