import OrderCard from "./card/OrderCard";
import SearchInput from "./ui/SearchInput";
import TabHeader from "./ui/TabHeader";

export default function Tabs() {
  return (
    <div>
      <div className="tabs tabs-border space-y-4">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-black"
          aria-label="Order"
        />
        <div className="tab-content space-y-4">
          <div className="flex flex-col">
            <TabHeader />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-black"
          aria-label="Sales"
          defaultChecked
        />
        <div className="tab-content p-10">Tab content 2</div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-black"
          aria-label="Purchase"
        />
        <div className="tab-content p-10">Tab content 3</div>
      </div>
    </div>
  );
}
