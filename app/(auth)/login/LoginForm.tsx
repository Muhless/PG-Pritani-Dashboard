"use client";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const dummyUser = {
        email: "admin@gmail.com",
        password: "admin123",
      };

      if (email === dummyUser.email && password === dummyUser.password) {
        router.push("/dashboard");
      } else {
        setError("email or password invalid");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-5">
      {/* left */}
      <div className="hidden lg:flex col-span-2 items-center justify-center bg-primary-dark">
        <p className="text-white text-3xl text-center">
          Penggilingan Padi
          <br /> Pritani
        </p>
      </div>
      {/* right */}
      <div className="flex items-center justify-center col-span-3">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl items-center text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" border border-emerald-500 rounded-lg w-72 p-2 outline-none focus:border-emerald-700 transition-colors"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-emerald-500 rounded-lg w-72 p-2 outline-none transition-colors focus:border-emerald-700"
                  />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 "
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-500 w-72 mt-4 flex justify-center items-center p-2 rounded-lg cursor-pointer hover:bg-emerald-600 transition-colors"
            >
              {isLoading ? (
                <div className="gap-2 flex items-center text-white">
                  <Loader2 size={16} className="animate-spin " />
                  Loading
                </div>
              ) : (
                <p className="text-white">Masuk</p>
              )}
            </button>
          </form>
          <div>
            Lupa password ?{" "}
            <Link
              href="/forgot-password"
              className="hover:underline cursor-pointer hover:text-emerald-500 transition-colors"
            >
              klik disini
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
