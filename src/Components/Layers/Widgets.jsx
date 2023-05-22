import { Friendlist } from "../Widgets/Friendlist";
import { General_Chat } from "../Widgets/General_Chat";
import { Menu } from "../Widgets/Menu/Menu";
import { Quests } from "../Widgets/Quests";
import { Time } from "../Widgets/Time";

export const Widgets = () => {
  return (
    <div
      className="bg-transparent absolute"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <General_Chat />
      <Quests />
      <Time />
      <Friendlist />
      <Menu />
    </div>
  );
};
