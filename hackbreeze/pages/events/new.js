import { Field, Form, Formik } from "formik";
import React from "react";
import { useEventMutations } from "../../hooks/mutations";
import { useRouter } from "next/router";

const EventForm = () => {
  const { createEvent } = useEventMutations();
  const router = useRouter();
  return (
    <div className="px-4 py-12 flex flex-col justify-center items-center">
      <div className="p-12 shadow-lg rounded-lg">
        <div className="text-2xl text-secondary font-bold font-mono">
          New Event
        </div>

        <Formik
          initialValues={{ title: "", description: "", start: "", end: "" }}
          onSubmit={(values) => {
            createEvent.mutate(values);
            router.push("/events");
          }}
        >
          <Form className="flex flex-col justify-center items-center">
            <Field
              type="text"
              placeholder="title"
              className="border-black border-b-2 my-2 transition-transform focus:outline-none focus:scale-105"
              name="title"
            />
            <Field
              type="text"
              placeholder="des"
              className="border-black border-b-2 my-2 transition-transform focus:outline-none focus:scale-105"
              name="description"
            />

            <button
              type="submit"
              className="btn bg-secondary text-white px-4 py-2 rounded-md mt-4"
            >
              Add
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EventForm;
