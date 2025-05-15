// src/Pages/Login/Login.jsx

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        Swal.fire("Welcome!", "Logged in successfully!", "success");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Oops!", err.message, "error");
      });
  };

  // Function to fill in demo user/admin credentials
  const fillDemoCredentials = (role) => {
    if (role === "admin") {
      setValue("email", "admin@gmail.com");
      setValue("password", "Admin123@");
    } else {
      setValue("email", "user@gmail.com");
      setValue("password", "User123@");
    }
  };

  return (
    <>
      <Helmet>
        <title>Palate Pioneer | Login</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 p-4">
        <div className="max-w-4xl w-full bg-white/60 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Form */}
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back 👋</h2>
            <p className="text-sm text-gray-600 mb-6">
              Login to continue your culinary journey with us.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="pl-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">Email is required</span>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="pl-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {errors.password && (
                  <span className="text-red-600 text-sm">Password is required</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#AB8476] hover:bg-[#101135] text-white py-3 rounded-xl transition duration-300 font-semibold"
              >
                Sign In
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4">
              New to Palate Pioneer?{" "}
              <Link to="/signup" className="text-[#AB8476] font-medium hover:underline">
                Create an account
              </Link>
            </p>

            <div className="mt-6 flex items-center justify-center">
              <SocialLogin />
            </div>

            {/* Demo User/Admin Credentials Buttons */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => fillDemoCredentials("user")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition duration-300"
              >
                Login as Demo User
              </button>
              <button
                onClick={() => fillDemoCredentials("admin")}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition duration-300"
              >
                Login as Demo Admin
              </button>
            </div>
          </div>

          {/* Right Side: Image or Illustration */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80"
              alt="Food"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
