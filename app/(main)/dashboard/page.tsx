import StatCard from "@/components/card/StatCard";
import SummaryCard from "@/components/card/SummaryCard";
import Tabs from "@/components/Tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPages() {
  return (
    <div className="">
      <div className="mb-5">
        <h1 className="text-2xl">Hello User</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          praesentium?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
      <div>
        <Tabs/>
      </div>
    </div>
  );
}
