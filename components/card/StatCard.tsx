import SummaryCard from "./SummaryCard";



export default function StatCard() {
  return (
    <div className="bg-sixth p-3 rounded-lg">
      <h3 className="font-bold text-lg mb-2">Title</h3>
      <div className="grid grid-cols-2 gap-3">
        <SummaryCard title="Nama" />
        <SummaryCard title="Nama" />
      </div>
    </div>
  );
}
