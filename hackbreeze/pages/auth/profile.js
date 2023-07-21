import React from "react";
import ProfileImage from "../../components/Profile/ProfileImage";
import TeamList from "../../components/Team/TeamList";
import { useUser } from "../../hooks/queries";
import FriendList from "../../components/Friends/FriendList";

const ProfilePage = () => {
  const { data: user } = useUser();

  return (
    <div className="flex w-full p-4">
      <div className="w-1/5 flex flex-col bg-tertiary rounded-l-lg px-4 py-8 items-center">
        {user && <ProfileImage name={user?.name} />}
        <div className="text-white text-xl font-semibold">{"Lorem Ipsum"}</div>
        <div className="flex flex-col text-primary items-center">
          <div className="text-lg mt-2">Achievements</div>
          <div className="text-sm list-item mt-2">Achievements</div>
          <div className="text-sm list-item mt-2">Achievements</div>
          <div className="text-sm list-item mt-2">Achievements</div>
          <div className="text-sm list-item mt-2">Achievements</div>
          <div className="text-sm list-item mt-2">Achievements</div>
        </div>
      </div>
      <div className="w-4/5 flex mx-4 bg-primary">
        <div className="w-1/2 mr-4">
          <TeamList teams={user?.teams} />
        </div>
        <div className="w-1/2">
          <FriendList friends={user?.friends} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
