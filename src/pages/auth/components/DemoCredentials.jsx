
import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { UserIcon, KeyIcon } from "@heroicons/react/24/outline";

export function DemoCredentials() {
  return (
    <Card className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardBody className="p-5">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
            <KeyIcon className="w-4 h-4 text-white" />
          </div>
          <Typography variant="small" className="font-bold text-gray-800">
            Demo Accounts
          </Typography>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 text-indigo-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Admin:</span>
            </div>
            <span className="font-mono text-sm text-indigo-600 bg-indigo-50 px-2 py-1 rounded">admin / admin123</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 text-purple-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Manager:</span>
            </div>
            <span className="font-mono text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded">manager / manager123</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 text-pink-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">HR:</span>
            </div>
            <span className="font-mono text-sm text-pink-600 bg-pink-50 px-2 py-1 rounded">hr / hr123</span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center">
              <UserIcon className="w-4 h-4 text-emerald-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">User:</span>
            </div>
            <span className="font-mono text-sm text-emerald-600 bg-emerald-50 px-2 py-1 rounded">user / user123</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default DemoCredentials;
