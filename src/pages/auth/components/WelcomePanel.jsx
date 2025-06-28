
import React from "react";
import { Typography } from "@material-tailwind/react";
import { BuildingOfficeIcon, SparklesIcon, ShieldCheckIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export function WelcomePanel() {
  return (
    <div className="hidden lg:flex bg-gradient-to-br from-blue-400 to-blue-600  items-center justify-center p-12 relative overflow-hidden">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-white rounded-full opacity-15"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-white rounded-full opacity-10"></div>
      </div> */}
      
      <div className="relative z-10 text-center text-white max-w-md">
        <div className="mb-8">
          <div className="w-28 h-28 mx-auto bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 border border-white/30 shadow-2xl">
            <BuildingOfficeIcon className="w-14 h-14" />
          </div>
          <Typography variant="h2" className="font-bold mb-4 text-4xl bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
            EmpClock Pro
          </Typography>
          <Typography variant="lead" className="opacity-90 text-indigo-100 leading-relaxed">
            Transform your workplace with our cutting-edge employee management platform
          </Typography>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors duration-300 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ShieldCheckIcon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-sm font-semibold text-white">Secure & Reliable</span>
              <p className="text-xs text-indigo-200">Enterprise-grade security</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors duration-300 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ChartBarIcon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-sm font-semibold text-white">Real-time Analytics</span>
              <p className="text-xs text-indigo-200">Live performance insights</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors duration-300 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-sm font-semibold text-white">Smart Automation</span>
              <p className="text-xs text-indigo-200">AI-powered efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePanel;
