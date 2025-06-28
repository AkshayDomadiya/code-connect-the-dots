
import React, { useState } from "react";
import {
  Input,
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export function SignIn() {
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl mx-auto flex bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side - Professional Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 to-slate-700 items-center justify-center p-12 relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center text-white max-w-md">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <BuildingOfficeIcon className="w-12 h-12" />
              </div>
              <Typography variant="h2" className="font-bold mb-4 text-3xl">
                Welcome to EmpClock
              </Typography>
              <Typography variant="lead" className="opacity-90 text-gray-200">
                Your comprehensive employee management solution for modern workplaces.
              </Typography>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-sm">Secure authentication</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Real-time dashboard</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-sm">Advanced analytics</span>
              </div>
            </div>
          </div>
        </div>

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

            {/* Demo Credentials */}
            <Card className="mb-6 bg-slate-50 border-0">
              <CardBody className="p-4">
                <Typography variant="small" className="font-semibold text-slate-800 mb-3">
                  Demo Accounts
                </Typography>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Admin:</span>
                    <span className="font-mono text-slate-800">admin / admin123</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">Manager:</span>
                    <span className="font-mono text-slate-800">manager / manager123</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">HR:</span>
                    <span className="font-mono text-slate-800">hr / hr123</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">User:</span>
                    <span className="font-mono text-slate-800">user / user123</span>
                  </div>
                </div>
              </CardBody>
            </Card>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
