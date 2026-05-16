interface OrderCardProps {
  customer: string;
  phone_number: string;
  product: string;
  total: number;
}

export default function OrderCard({
  customer = "name",
  phone_number = "08xxxxxxx",
  product = "product",
  total = 0o0,
}: OrderCardProps) {
  return (
    <div className="w-full p-5 rounded-xl space-y-1 bg-card">
      <p className="font-bold">{customer}</p>
      <p className="text-sm underline">{phone_number}</p>
      <div className="grid grid-cols-2 text-sm py-2">
        <p className="border border-r-0 p-2">{product}</p>
        <p className="border p-2">{total}</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-3">
        <button type="button" className="btn bg-success">
          Approve
        </button>
        <button type="button" className="btn bg-error">
          Decline
        </button>
      </div>
    </div>
  );
}
