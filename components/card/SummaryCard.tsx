import { MoveUpRight } from "lucide-react";

interface SummaryCardProps {
  title: string;
  content: number;
  description: string;
}

export default function SummaryCard({
  title = "title",
  content = 0,
  description = "description",
}: SummaryCardProps) {
  return (
    <div className="bg-white border p-4 rounded-lg space-y-2">
      <div className="flex items-center justify-between">
        <h1>{title}</h1>
        <div className="border rounded-full p-2">
          <MoveUpRight size={18} />
        </div>
      </div>
      <p className="text-4xl">{content}</p>
      <div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
