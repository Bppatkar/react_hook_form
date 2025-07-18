import React from "react";
import Card from "./Card";

const Cards = ({ users }) => {
  return (
    <div className="flex max-h-96 min-h-96 w-full flex-wrap justify-center gap-5 overflow-auto p-4">
      {users.map((user, index) => {
        return <Card users={user} key={index} />;
      })}
    </div>
  );
};

export default Cards;
