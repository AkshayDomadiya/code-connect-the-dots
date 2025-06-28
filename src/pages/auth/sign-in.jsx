
import React from "react";
import { Typography } from "@material-tailwind/react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import WelcomePanel from "./components/WelcomePanel";
import DemoCredentials from "./components/DemoCredentials";
import SignInForm from "./components/SignInForm";

export function SignIn() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-20 blur-3xl"></div> */}
      
      <div className="w-full max-w-6xl mx-auto flex bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative z-10">
        <WelcomePanel />

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center bg-white/95 backdrop-blur-sm">
          <div className="w-full max-w-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <LockClosedIcon className="w-10 h-10 text-white" />
              </div>
              <Typography variant="h3" className="font-bold text-gray-800 mb-2 text-3xl">
                Welcome Back
              </Typography>
              <Typography className="text-gray-600 text-sm">
                Sign in to access your dashboard
              </Typography>
            </div>

            {/* <DemoCredentials /> */}
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
