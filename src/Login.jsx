import React from 'react';
import App from './App';

function Login() {
  const handleLogin = () => {
    // Logic for handling login
    // Redirect to solutions page after login
    window.location.href = '/solutions';
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Login</h2>
      <form className="max-w-md mx-auto space-y-6">
        <div>
          <label className="block text-orange-600 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Your email" />
        </div>
        <div>
          <label className="block text-orange-600 mb-2">Password</label>
          <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Your password" />
        </div>
        <button type="button" onClick={handleLogin} className="w-full bg-yellow-400 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors">
          Login
        </button>
        <p className="text-center">
          New user? <a href="/signup" className="text-blue-500">Sign up here</a>
        </p>
      </form>
    </div>
  );
}

export default Login; 