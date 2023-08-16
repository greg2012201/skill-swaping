import React from "react";
import { FaGithub } from "react-icons/fa";

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-3">
      <button type="button" className="btn btn-lg normal-case">
        Sign in with GitHub
        <FaGithub size={20} />
      </button>
    </div>
  );
}

export default LoginPage;
