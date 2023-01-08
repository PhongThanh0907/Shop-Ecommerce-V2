import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {};

  return (
    <div className="max-w-7xl mx-auto px-12 mt-2">
      <div className="flex gap-4 py-5 items-center">
        <Link to="/">
          <h1 className="font-semibold">Home</h1>
        </Link>
        <ChevronRightIcon className="h-3 w-3 mt-1" />
        <h1>Login</h1>
      </div>
      <div className="relative flex items-center justify-center">
        <form onSubmit={handleLogin} className="text-center font-bold w-[40%]">
          <h1 className="text-2xl mb-6">Đăng Nhập</h1>
          <div className="bg-backgroundColor py-10 w-full rounded-lg sm:w-full">
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
                className="focus:outline-none focus:shadow-outline py-1 px-2 rounded w-[60%]"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-[90%] m-auto my-6 sm:text-sm sm:w-full gap-2 sm:grid sm:grid-cols-1">
              <button
                type="submit"
                className="bg-[white] w-full px-8 py-2 rounded sm:px-6 sm:py-2 sm:text-gray-400 sm:w-[50%] sm:m-auto sm:my-2"
              >
                Login
              </button>
              <Link to="/user/register">
                <p className="text-[#bfc9d2]">
                  You are not have account{" "}
                  <button className="text-[white] underline hover:text-[#0099b1] duration-300">
                    Register
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

export default Login;
