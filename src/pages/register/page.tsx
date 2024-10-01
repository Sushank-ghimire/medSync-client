import { FormEvent } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegisterData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
      password: formData.get("password"),
    };
    console.log(data);
    form.reset();
  };
  return (
    <section className="md:container w-[90vw] mx-auto text-xl md:text-2xl">
      <form
        className="md:w-1/2 w-[80%] h-fit border-2 shadow-lg rounded-lg p-2 md:p-6 mt-8 flex flex-col gap-4 mx-auto text-sm"
        onSubmit={handleRegisterData}
      >
        <div>
          <h1 className="font-bold text-slate-600 md:text-2xl">
            Create Account
          </h1>
          <p>Please sign up to book appointment</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Full Name
          </label>
          <input
            className="border-2 border-slate-200/50 p-2 rounded"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="border-2 border-slate-200/50 p-2 rounded"
            type="text"
            id="email"
            required
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            className="border-2 border-slate-200/50 p-2 rounded"
            type="password"
            id="password"
            required
            name="password"
          />
        </div>
        <button
          className="w-full text-white bg-indigo-600 hover:bg-indigo-500 transition-all rounded-lg py-3"
          type="submit"
        >
          Submit
        </button>
        <div className="text-center w-full">
          Already have an account?{" "}
          <Link className="underline text-blue-600" to="/login">
            Login here
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
