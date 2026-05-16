import { menus } from "@/constants/menu";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-card border border-gray-200">
      <div className="flex flex-col mt-10 px-3 space-y-5 text-sm text-gray-600">
        {menus.map((group) => (
          <div key={group.group}>
            <p className="text-xs text-gray-400 uppercase tracking-wider px-2 mb-1">
              {group.group}
            </p>
            <div className="space-y-2">
              {group.items?.map((menu) => (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className="hover:bg-primary-light hover:text-white py-3 px-2 rounded-lg flex items-center gap-3 transition-colors"
                >
                  <menu.icon size={18} />
                  {menu.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
