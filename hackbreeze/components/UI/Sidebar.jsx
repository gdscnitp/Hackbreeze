import ProfileImage from "../Profile/ProfileImage";
import DarkModeButton from "./DarkButton";

const Sidebar = () => {
  return (
    <div className="flex items-center justify-end text-sm flex-col min-h-screen bg-[#7B2869] my-10 ml-3 rounded-lg px-1">
      {/* <button className="rounded-full w-full bg-primary">profile</button> */}
      <button>
        <ProfileImage
          size="sm"
          name={"A"}
          className="bg-primary text-secondary my-1"
        />
      </button>
      {/* <button className=" bg-blue-200 rounded-full">Dark</button> */}
      <DarkModeButton>
        <ProfileImage
          size="sm"
          name={"D"}
          className={"bg-neutral-800 text-primary"}
        />
      </DarkModeButton>
      <button className="">
        <ProfileImage
          size="sm"
          name={"A"}
          className="bg-primary text-secondary my-1"
        />
      </button>
    </div>
  );
};
export default Sidebar;
