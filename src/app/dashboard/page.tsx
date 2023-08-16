"use client";

import { logout } from "@/auth";
import React from "react";

function DashboardPage() {
  return (
    <div>
      <button className="btn" onClick={() => logout()}>
        logout
      </button>
    </div>
  );
}

export default DashboardPage;
