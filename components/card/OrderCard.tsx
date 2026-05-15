export default function OrderCard() {
  return (
    <div className="w-full p-5 rounded-lg bg-white">
      <p className="font-bold">Title</p>
      <p className="text-sm underline">08871165551</p>
      <div className="grid grid-cols-2 text-sm">
        <p className="border border-r-0 p-2">Product</p>
        <p className="border p-2">Total</p>
      </div>
    </div>
  );
}
