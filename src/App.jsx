import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemoveUser = (index) => {
    setUsers(users.filter((user, i) => i !== index));
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="container mx-auto">
        <Cards users={users} handleRemoveUser={handleRemoveUser} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
};

export default App;
