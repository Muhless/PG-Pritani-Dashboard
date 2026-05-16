import SearchInput from "./SearchInput";

export default function TabHeader() {
  return (
    <div className="flex items-center justify-between">
      <p>5 data found</p>
      <SearchInput />
    </div>
  );
}
