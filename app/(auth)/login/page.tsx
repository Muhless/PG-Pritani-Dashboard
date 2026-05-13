import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      {/* left */}
      <div className="hidden lg:flex items-center justify-center bg-zinc-900">
        kiri
      </div>
      {/* right */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl items-center text-center">Login</h1>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="border-white border rounded-lg w-72 p-2 outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="border border-white rounded-lg w-72 p-2 outline-none transition-colors focus:border-emerald-500"
              />
            </div>
          </div>
          <button className="bg-emerald-500 p-2 rounded-lg cursor-pointer hover:bg-emerald-600 transition-colors">
            Masuk
          </button>
          <div>
            <p>
              Lupa password ?{" "}
              <Link
                href="/forgot-password"
                className="hover:underline cursor-pointer hover:text-emerald-600 transition-colors"
              >
                klik disini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
