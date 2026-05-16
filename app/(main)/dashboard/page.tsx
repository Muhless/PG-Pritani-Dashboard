import StatCard from "@/components/card/StatCard";
import Greeting from "@/components/shared/Greeting";
import Tabs from "@/components/Tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const date = new Date().toLocaleDateString("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function DashboardPages() {
  return (
    <div className="">
      <div className="mb-5 space-y-2">
        <p className="">{date}</p>
        <Greeting />
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
      <div className="mt-5">
        <Tabs />
      </div>
    </div>
  );
}
