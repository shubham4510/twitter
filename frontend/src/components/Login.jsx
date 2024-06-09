import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className=" flex h-screen justify-around">
        <div className=" w-[40%] flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56Gnsv1-VbZYG78iHjLogURyJBAs_9m7ESQ&s"
            alt="twitter"
            height={"900px"}
            width={"900px"}
          />
        </div>
        <div className=" w-[40%] h-full flex justify-between items-center ">
          <div className=" h-[60%]  flex flex-col justify-between">
            <h3 className=" text-7xl font-extrabold whitespace-nowrap">
              Happening now
            </h3>
            <h4 className=" text-3xl font-bold">Join today.</h4>
            <form className=" flex flex-col gap-4">
              {isLogin && (
                <>
                  <input
                    className=" text-gray-600 border-[2px] border-gray-200 w-8/12 outline-blue-300  rounded-full px-4 py-2"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    className=" text-gray-600 border-[2px] border-gray-200 w-8/12 outline-blue-300  rounded-full px-4 py-2"
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                </>
              )}
              <input
                className=" text-gray-600 border-[2px] border-gray-200 w-8/12 outline-blue-300  rounded-full px-4 py-2"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className=" text-gray-600 border-[2px] border-gray-200 w-8/12 outline-blue-300  rounded-full px-4 py-2"
                type="password"
                name=""
                placeholder="Password"
              />
            </form>
            <button className="py-2 border-2 border-black rounded-full w-2/12 hover:scale-110 shadow-md shadow-black hover:bg-black hover:text-white transition-all duration-300">
              {
                isLogin? "Sign up":"Login"
            }
            </button>
            <h4>
                { isLogin? "Do not have an account?": "Already have an account?"}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className=" text-blue-600 font-semibold cursor-pointer"
              >
                {
                  isLogin? "Login":"Sign up"
                }
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
