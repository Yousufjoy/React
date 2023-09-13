import React from "react";

export const User = ({ user }) => {
  console.log({ user });
  return (
    <div className="main2">
      <h1>
        {user.id} {user.name}
      </h1>
      <h2>Id : {user.email}</h2>
      <h2>Address : {user.address.street}</h2>
    </div>
  );
};
