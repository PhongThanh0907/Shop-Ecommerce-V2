import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const registerUser = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const res = await userAPI.createUser(values);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleRegister = (e: any) => {
    console.log("as");
  };

  return (
    <div className="max-w-7xl mx-auto px-12 mt-2">
      <div className="flex gap-4 py-5 items-center">
        <Link to="/">
          <h1 className="font-semibold">Home</h1>
        </Link>
        <ChevronRightIcon className="h-3 w-3 mt-1" />
        <h1>Register</h1>
      </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleRegister}
          className="text-center relative z-10 font-bold w-[40%]"
        >
          <h1 className="text-2xl mb-6">Register</h1>
          <div className="bg-backgroundColor py-10 w-[600px] rounded-lg sm:w-full">
            <div className="flex justify-between items-center w-[90%] m-auto my-6">
              <h1 className="text-[white] font-semibold">User name (*)</h1>
              <input
                className="focus:outline-none focus:shadow-outline py-1 px-2 rounded w-[60%]"
                type="name"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-[90%] m-auto my-6">
              <h1 className="text-[white] font-semibold">Email (*)</h1>
              <input
                className="focus:outline-none focus:shadow-outline py-1 px-2 rounded w-[60%]"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-[90%] m-auto">
              <h1 className="text-[white] font-semibold">Password (*)</h1>
              <input
                className="focus:outline-none focus:shadow-outline py-1 px-2  rounded w-[60%]"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-[90%] m-auto my-6 sm:text-sm sm:w-full sm:gap-3 sm:grid sm:grid-cols-1">
              <button
                type="submit"
                className="bg-[white] px-10 py-2 rounded sm:w-[50%] sm:m-auto"
              >
                Register
              </button>
              <Link to="/dang-nhap">
                <p className="text-[#bfc9d2]">
                  You are have account{" "}
                  <button className="text-[white] underline hover:text-[#0099b1] duration-300">
                    Login
                  </button>{" "}
                  now!
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
