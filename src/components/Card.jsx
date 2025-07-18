import React from "react";

const Card = ({ users, handleRemoveUser, index }) => {
  return (
    <div className="flex h-full w-52 flex-col items-center rounded-lg bg-zinc-50 p-2">
      <div className="h-[3vw] w-[3vw] overflow-hidden rounded-full bg-zinc-200">
        <img
          src={users.imageUrl}
          alt="img"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <h1 className="mt-1 text-center text-xl leading-none font-semibold">
        {users.name}
      </h1>
      <h4 className="text-center text-sm font-semibold opacity-40">
        {users.email}
      </h4>
      <p className="mt-2 text-center text-xs font-semibold tracking-tight">
        {users.description
          ? users.description
          : "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."}
      </p>
      <button
        onClick={() => handleRemoveUser(index)}
        className="mt-4 rounded-lg bg-red-600 px-3 py-1 text-xs font-semibold text-white hover:bg-red-800"
      >
        Remove It
      </button>
    </div>
  );
};

export default Card;
