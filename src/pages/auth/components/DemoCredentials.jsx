
import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export function DemoCredentials() {
  return (
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
  );
}

export default DemoCredentials;
