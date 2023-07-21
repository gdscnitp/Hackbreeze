import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PastTeams = ({ teams, friends }) => {
  const router = useRouter();

  console.log(teams);
  return (
    <div>
      <div className="flex flex-row space-x-0 m-4 ">
        <div className="flex m-8 -space-x-4">
          {teams?.map((el) => (
            <div
              className=" w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl"
              onClick={() => router.push(`/team/${el._id}`)}
            >
              {el.title[0]}
            </div>
          ))}
          <Link
            className="flex items-center justify-center w-14 h-14 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="/team"
          >
            All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PastTeams;
