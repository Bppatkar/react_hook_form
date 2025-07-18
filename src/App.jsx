import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "bhanu",
      email: "bhanu@gmail",
      imageUrl:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nam. Inventore, dolore? Eaor consectetur!",
    },
  ]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="container mx-auto">
        <Cards users={users} />
        <Form />
      </div>
    </div>
  );
};

export default App;
