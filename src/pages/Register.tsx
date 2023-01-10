import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import LoadingButton from "../components/LoadingButton";
import { toast } from "react-toastify";
import { axiosClient } from "../services/axiosClient";
import { USER_API } from "../constants/option";

type FormValues = {
  userName: string;
  email: string;
  password: string;
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await axiosClient.post(USER_API.REGISTER_USER, data);
      setUser(res);
      if (res) {
        navigate("/");
        toast("Successful account registration!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      console.log(err);
      if (err) {
        toast.error("Sorry! Register Fail", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("token", user?.token);
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-12 mt-2">
      <div className="flex gap-4 lg:py-5 items-center">
        <Link to="/">
          <h1 className="font-semibold">Home</h1>
        </Link>
        <ChevronRightIcon className="h-3 w-3 mt-1" />
        <h1>Register</h1>
      </div>
      <div className="flex items-center justify-center">
        {loading ? (
          <div className="flex justify-center py-10">
            <LoadingButton />
          </div>
        ) : (
          <div className="bg-backgroundColor p-4 mt-10 lg:w-[30vw] mx-auto rounded-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full gap-y-4"
            >
              <h1 className="text-white font-bold text-center py-4 text-2xl">
                Register
              </h1>
              <input
                type="text"
                placeholder="User name"
                className="px-4 w-full bg-white focus:outline-none py-3 rounded-md text-black font-semibold"
                {...register("userName", { required: true, minLength: 2 })}
              />
              {errors.userName?.type === "required" && (
                <p className="text-red-600" role="alert">
                  (*) Name is required
                </p>
              )}
              {errors.userName?.type === "minLength" && (
                <p className="text-red-600" role="alert">
                  (*) Name must be more than 2 characters
                </p>
              )}

              <input
                placeholder="Email"
                className="px-4 w-full bg-white focus:outline-none py-3 rounded-md text-black font-semibold"
                {...register("email", {
                  required: true,
                  pattern:
                    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  (*) Email is required
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-600" role="alert">
                  (*) Email invalidate
                </p>
              )}

              <input
                type="password"
                placeholder="Password"
                className="px-4 w-full bg-white focus:outline-none py-3 rounded-md text-black font-semibold"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  (*) Password is required
                </p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-600" role="alert">
                  (*) Password must be more than 6 characters
                </p>
              )}
              <button
                type="submit"
                className="text-white font-semibold bg-black opacity-70 hover:opacity-90 duration-300 active:opacity-100 py-2 my-4 rounded-md"
              >
                Register
                {user ? <div className="Toastify"></div> : <></>}
              </button>
              <Link to="/user/login">
                <p className="text-gray-600 text-right">
                  You have account{" "}
                  <button className="text-[white] underline hover:text-black duration-300">
                    Login
                  </button>{" "}
                  now!
                </p>
              </Link>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
