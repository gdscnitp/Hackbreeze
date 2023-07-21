import React, { useState } from "react";
import VoteCard from "./VoteCard";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useTeamMutations } from "../../hooks/mutations";
import { useTeam } from "../../hooks/queries";

const Vote = ({ id }) => {
  const { data: data1 } = useTeam(id);
  const { addProject } = useTeamMutations(id);

  return (
    <div className="w-full">
      <h2 className="font-poppins text-[20px] font-medium py-[8px]">
        Vote the Ideas
      </h2>
      <div className="flex-col justify-center pl-[px]  bg-white h-full w-[370px] space-y-1 overflow-x-auto">
        {data1?.projects?.map((item) => (
          <VoteCard
            key={item._id}
            id={item._id}
            name={item.description}
            teamId={id}
            votes={item.votes}
          />
        ))}
      </div>
      <Formik
        initialValues={{ description: "" }}
        onSubmit={(values) => {
          addProject.mutate({ description: values.description, madeBy: id });
        }}
        className="mt-4"
      >
        <Form className="flex justify-around">
          <Field name="description" />
          <button>Add Idea</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Vote;
