import { LayoutDashboard, User, Users } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-primary">
      <div className="flex flex-col mt-10 px-5 space-y-2 text-sm text-gray-600">
        <Link
          href="/dashboard"
          className="hover:bg-white/50 cursor-pointer p-2 rounded-lg flex items-center gap-3"
        >
          <LayoutDashboard size={18} />
          Home
        </Link>
        <Link
          href="/supplier"
          className="hover:bg-white/50 cursor-pointer p-2 rounded-lg flex items-center gap-3"
        >
          <User size={18} />
          Supplier
        </Link>
        <Link
          href="/customer"
          className="hover:bg-white/50 cursor-pointer p-2 rounded-lg flex items-center gap-3"
        >
          <Users size={18} />
          Customer
        </Link>
        <Link
          href="/product"
          className="hover:bg-white/50 cursor-pointer p-2 rounded-lg flex items-center gap-3"
        >
          <LayoutDashboard size={18} />
          Product
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-white/50 cursor-pointer p-2 rounded-lg flex items-center gap-3"
        >
          <LayoutDashboard size={18} />
          Purchase
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-white/50 cursor-pointer p-2 rounded-lg flex items-center gap-3"
        >
          <LayoutDashboard size={18} />
          Sales
        </Link>
      </div>
    </div>
  );
}
