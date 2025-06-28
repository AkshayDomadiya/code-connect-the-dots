
import React, { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";

export function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const users = [
    { email: "admin", password: "admin123", role: "admin" },
    { email: "user", password: "user123", role: "user" },
    { email: "hr", password: "hr123", role: "hr" },
    { email: "manager", password: "manager123", role: "manager" },
  ];

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Username is required");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isValid) return;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <Typography variant="small" className="text-red-700 font-medium">
            {error}
          </Typography>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSignIn} className="space-y-5">
        <div>
          <div className="relative">
            <Input
              size="lg"
              type="text"
              label="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              className="!border-slate-200 focus:!border-slate-400 pl-10"
            />
            <UserIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          {emailError && (
            <Typography variant="small" className="text-red-600 mt-1 ml-1">
              {emailError}
            </Typography>
          )}
        </div>

        <div>
          <div className="relative">
            <Input
              size="lg"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              className="!border-slate-200 focus:!border-slate-400 pl-10 pr-10"
            />
            <LockClosedIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          {passwordError && (
            <Typography variant="small" className="text-red-600 mt-1 ml-1">
              {passwordError}
            </Typography>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-slate-900 hover:bg-slate-800 transition-colors duration-200 normal-case text-sm font-medium"
        >
          Sign In
        </Button>

        <div className="flex justify-between text-sm pt-2">
          <Link 
            to="/auth/forgot-password" 
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Forgot password?
          </Link>
          <Link 
            to="/auth/registration" 
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Register company
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
