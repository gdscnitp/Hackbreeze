import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary text-primary font-mono flex items-center py-4 px-6 w-full">
      <div className="flex flex-col items-center w-1/4">
        <div className="font-semibold text-xl">Hackbreeze</div>
        <div className="border-b-2 border-tertiary">Web Team</div>
      </div>
      <div className="w-3/4 flex items-center justify-around">
        <div className="w-1/3 flex flex-col items-center">
          <div className="font-semibold text-sm my-2">Events Links</div>

          <Link href={"/events"} className="mb-2">
            Events
          </Link>
          <Link href={"/events"} className="mb-2">
            Events
          </Link>
          <Link href={"/events"} className="mb-2">
            Events
          </Link>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="font-semibold text-sm my-2">Events Links</div>

          <Link href={"/events"} className="mb-2">
            Events
          </Link>
          <Link href={"/events"} className="mb-2">
            Events
          </Link>
          <Link href={"/events"} className="mb-2">
            Events
          </Link>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <div className="font-semibold text-sm my-2">Events Links</div>

          <Link href={"/events"} className="mb-2">
            Events
          </Link>
          <Link href={"/events"} className="mb-2">
            Events
          </Link>
          <Link href={"/events"} className="mb-2">
            Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
