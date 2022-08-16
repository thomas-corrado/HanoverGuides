import * as React from "react";
import { useForm } from "react-hook-form";
import NavBar from "../../components/navBar";

export default function ReservationsPage() {
  const { register, handleSubmit } = useForm();

  async function submitHandler(data) {
    const response = await fetch("/api/form", {
    		method: "POST",
        	body: JSON.stringify(data),
        	headers: {
        		'Content-Type': 'application/json',
      		},
    	})
  }

  return (
    <div>
      <NavBar />
      <form
        style={{ top: "10rem", position: "absolute" }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <label htmlFor="first">First Name</label>
        <input placeholder="John" {...register("first")} />

        <label htmlFor="last">Last Name</label>
        <input placeholder="Doe" {...register("last")} />

        <label htmlFor="phone">Phone Numner</label>
        <input placeholder="" {...register("phone")} />

        <label htmlFor="email">Email</label>
        <input placeholder="" {...register("email")} />

        <label htmlFor="guests">Number of Guests</label>
        <input placeholder="" {...register("guests")} />

        <label htmlFor="date">Dates</label>
        <input placeholder="" {...register("date")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}