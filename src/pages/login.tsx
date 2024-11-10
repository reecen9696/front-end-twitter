"use client";

import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="h-screen flex flex-col justify-between relative">
      {/* Page Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="p-8  max-w-md w-full">
          <div className="text-center lg:text-body-lg mt-4 flex pb-2">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 cursor-pointer px-2"
            >
              {isLogin ? "Sign up" : "Log in"}
            </span>
          </div>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 "
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 lg:button-lg"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          {!isLogin && (
            <button className="w-full bg-black text-white py-2  mt-4">
              Sign up with Google
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default AuthForm;
