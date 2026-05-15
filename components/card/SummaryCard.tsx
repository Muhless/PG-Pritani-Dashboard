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
    <div className="bg-white p-3 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-sm text-gray-500">{title}</h3>
        {/* <div className="border rounded-full p-2">
          <MoveUpRight size={18} />
        </div> */}
      </div>
      <p className="text-xl font-bold">{content}</p>
      <div>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}
