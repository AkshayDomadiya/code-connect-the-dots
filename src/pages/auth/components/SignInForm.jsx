
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
  const [isLoading, setIsLoading] = useState(false);

  const users = [
    { email: "admin", password: "admin123", role: "admin" },
    { email: "user", password: "user123", role: "user" },
    { email: "hr", password: "hr123", role: "hr" },
    { email: "manager", password: "manager123", role: "manager" },
  ];

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");
    setIsLoading(true);

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Username is required");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isValid) {
      setIsLoading(false);
      return;
    }

    // Simulate loading for better UX
    setTimeout(() => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard/home");
      } else {
        setError("Invalid username or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
          <Typography variant="small" className="text-red-700 font-medium flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            {error}
          </Typography>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSignIn} className="space-y-6">
        <div>
          <div className="relative group">
            <Input
              size="lg"
              type="text"
              label="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              className="!border-gray-300 focus:!border-indigo-500 pl-12 transition-all duration-300 group-hover:shadow-md"
            />
            <UserIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300" />
          </div>
          {emailError && (
            <Typography variant="small" className="text-red-600 mt-2 ml-1 flex items-center">
              <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
              {emailError}
            </Typography>
          )}
        </div>

        <div>
          <div className="relative group">
            <Input
              size="lg"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              className="!border-gray-300 focus:!border-indigo-500 pl-12 pr-12 transition-all duration-300 group-hover:shadow-md"
            />
            <LockClosedIcon className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors duration-300 p-1 rounded-full hover:bg-indigo-50"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          {passwordError && (
            <Typography variant="small" className="text-red-600 mt-2 ml-1 flex items-center">
              <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
              {passwordError}
            </Typography>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 normal-case text-sm font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Signing In...
            </div>
          ) : (
            "Sign In"
          )}
        </Button>

        <div className="flex justify-between text-sm pt-4 border-t border-gray-100">
          <Link 
            to="/auth/forgot-password" 
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium hover:underline"
          >
            Forgot password?
          </Link>
          <Link 
            to="/auth/registration" 
            className="text-purple-600 hover:text-purple-800 transition-colors duration-300 font-medium hover:underline"
          >
            Register company
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
