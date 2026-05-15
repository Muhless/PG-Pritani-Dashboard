import OrderCard from "./card/OrderCard";
import SearchInput from "./ui/SearchInput";

export default function Tabs() {
  return (
    <div>
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-black"
          aria-label="Tab 1"
        />
        <div className="tab-content">
          <div className="flex flex-col">
            <p>5 data found</p>
            <SearchInput />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-black"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content p-10">Tab content 2</div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-black"
          aria-label="Tab 3"
        />
        <div className="tab-content p-10">Tab content 3</div>
      </div>
    </div>
  );
}
