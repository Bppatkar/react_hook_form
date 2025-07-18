import React from "react";

const Form = () => {
  return (
    <div className="mx-auto mt-10 flex w-fit justify-center gap-10 rounded-lg bg-zinc-50 p-3">
      <form action="" className="flex gap-10">
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="imageUrl"
        />
        <input
          className="rounded-lg bg-blue-600 px-2 py-1 font-semibold text-white hover:bg-blue-700"
          type="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
