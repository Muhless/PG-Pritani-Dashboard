import Card from "@/components/card/SummaryStatCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPages() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
