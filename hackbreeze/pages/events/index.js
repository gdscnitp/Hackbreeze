import React from "react";
import ContestList from "../../components/contest/Contest";
import Link from "next/link";
import { useEvents } from "../../hooks/queries";

const ContestPage = () => {
  const { data: events, isLoading } = useEvents();

  return (
    <div className="py-8 px-6 flex flex-col justify-center items-center">
      {!isLoading && <ContestList data={events} />}
      {!!isLoading && <p>Loading...</p>}
      <Link
        className="btn bg-secondary py-2 px-4 rounded-lg text-white font-bold self-end"
        href={"/events/new"}
      >
        Add New
      </Link>
    </div>
  );
};

export default ContestPage;
