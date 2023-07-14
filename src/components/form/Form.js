import axios from "axios";
import "./Form.css";

import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let submitForm = (data) => {
    console.log(data)
    axios
      .post("http://127.0.0.1:8000/users/", data)
      .then((response) => {
        console.log("Post Success, Response: ", response);
      })
      .catch((err) => {
        console.log("Error in User Creation", err);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            {...register("Name", { required: true })}
          />
          {errors.Name?.type === "required" && (
            <p className="text-warning">* Cannot Be Empty</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter your age"
            {...register("Age", { required: true })}
          />
          {errors.Age?.type === "required" && (
            <p className="text-warning">* Cannot Be Empty</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
