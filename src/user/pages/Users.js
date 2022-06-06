import React from "react";
import UserList from "../components/userList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ferhat",
      places: 3,
      image:
        "https://images.pexels.com/photos/10334838/pexels-photo-10334838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
