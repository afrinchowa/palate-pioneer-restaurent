/* eslint-disable no-unused-vars */
// src/Pages/SignUp/SignUp.jsx

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserPlus, Mail, Lock, Image } from "lucide-react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire("Welcome!", "Account created successfully!", "success");
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Palate Pioneer | Sign Up</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-100 via-pink-50 to-rose-100 p-4">
        <div className="max-w-5xl w-full bg-white/60 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Form Side */}
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Your Account 🍽️</h2>
            <p className="text-sm text-gray-600 mb-6">
              Join the Palate Pioneer community and start your flavorful adventure.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <UserPlus className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: true })}
                  className="pl-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
              </div>

              {/* Photo URL */}
              <div className="relative">
                <Image className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoUrl", { required: true })}
                  className="pl-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {errors.photoUrl && <span className="text-red-600 text-sm">Photo URL is required</span>}
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="pl-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="pl-10 py-3 w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                {errors.password && (
                  <span className="text-red-600 text-sm">
                    Password must be 6-20 chars, include uppercase, lowercase, number & special char.
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#AB8476] hover:bg-[#101135] text-white py-3 rounded-xl transition duration-300 font-semibold"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-[#AB8476] font-medium hover:underline">
                Login here
              </Link>
            </p>

            <div className="mt-6 flex items-center justify-center">
              <SocialLogin />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
              alt="Sign up visual"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
