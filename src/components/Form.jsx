import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mx-auto mt-10 flex w-fit justify-center gap-10 rounded-lg bg-zinc-50 p-3">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex gap-10">
        <input
          {...register("name")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
          {...register("imageUrl")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="imageUrl"
        />
        <input
          {...register("description")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Description"
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
