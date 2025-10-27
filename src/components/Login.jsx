import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
  };

  const handleInstagramLogin = () => {
    console.log("Instagram login clicked");
  };

  const handleTwitterLogin = () => {
    console.log("X (Twitter) login clicked");
  };

  return (
    <section
      id="login"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Login to access your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 focus-within:border-blue-500">
              <Mail className="text-gray-400 ml-3" size={20} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent p-3 text-gray-100 focus:outline-none"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 focus-within:border-blue-500">
              <Lock className="text-gray-400 ml-3" size={20} />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent p-3 text-gray-100 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-4 text-gray-400 text-sm">or continue with</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Google</span>
          </button>

          <button
            onClick={handleFacebookLogin}
            className="flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Facebook className="w-5 h-5" fill="currentColor" />
            <span>Facebook</span>
          </button>

          <button
            onClick={handleInstagramLogin}
            className="flex items-center justify-center gap-2 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </button>

          <button
            onClick={handleTwitterLogin}
            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Twitter className="w-5 h-5" fill="currentColor" />
            <span>X</span>
          </button>
        </div>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </motion.div>
    </section>
  );
}
