
import React from "react";
import { Typography } from "@material-tailwind/react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import WelcomePanel from "./components/WelcomePanel";
import DemoCredentials from "./components/DemoCredentials";
import SignInForm from "./components/SignInForm";

export function SignIn() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl mx-auto flex bg-white rounded-2xl shadow-xl overflow-hidden">
        <WelcomePanel />

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full max-w-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <LockClosedIcon className="w-8 h-8 text-slate-600" />
              </div>
              <Typography variant="h3" className="font-bold text-slate-900 mb-2">
                Sign In
              </Typography>
              <Typography className="text-slate-600 text-sm">
                Access your employee dashboard
              </Typography>
            </div>

            <DemoCredentials />
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
