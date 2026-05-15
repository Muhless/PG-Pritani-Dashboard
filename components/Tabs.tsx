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
        <div className="tab-content border-base-300 bg-white p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-black"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-white p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-black"
          aria-label="Tab 3"
        />
        <div className="tab-content border-base-300 bg-white p-10">
          Tab content 3
        </div>
      </div>
    </div>
  );
}
