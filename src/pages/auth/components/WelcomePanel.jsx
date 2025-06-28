
import React from "react";
import { Typography } from "@material-tailwind/react";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

export function WelcomePanel() {
  return (
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
  );
}

export default WelcomePanel;
