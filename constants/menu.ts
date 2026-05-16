import {
  Box,
  DollarSign,
  LayoutDashboard,
  ShoppingCart,
  User,
  Users,
  UserSquare,
} from "lucide-react";

export const menus = [
  {
    group: "General",
    items: [{ label: "Dashboard", href: "/dashboard", icon: LayoutDashboard }],
  },
  {
    group: "Data",
    items: [
      { label: "Employee", href: "/employee", icon: UserSquare },
      { label: "Supplier", href: "/supplier", icon: User },
      { label: "Customer", href: "/customer", icon: Users },
      { label: "Product", href: "/product", icon: Box },
    ],
  },
  {
    group: "Finance",
    items: [
      { label: "Purchase", href: "/purchase", icon: ShoppingCart },
      { label: "Sales", href: "/sales", icon: DollarSign },
    ],
  },
];
