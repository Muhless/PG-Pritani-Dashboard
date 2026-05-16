import TabHeader from "./TabHeader";

interface Tab {
  label: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
}

export default function Tabs({ tabs, defaultTab = 0 }: TabsProps) {
  return (
    <div>
      <div className="tabs tabs-border space-y-4">
        {tabs.map((tab, index) => (
          <>
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
                {tab.content}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
