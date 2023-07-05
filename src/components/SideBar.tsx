import React from "react";
import { FcComboChart, FcBusinessContact } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-8 p-4 h-screen">
      <span>
        <strong className="text-xl font-bold">Dashboard</strong>
      </span>

      <Link to={"/"} className="flex flex-row gap-2">
        <FcBusinessContact style={{ fontSize: "2rem" }} />
        <p className="font-medium hidden md:block">Contact</p>
      </Link>

      <Link to={"/chat&map"} className="flex flex-row gap-2">
        <FcComboChart style={{ fontSize: "2rem" }} />
        <p className="font-medium hidden md:block ">Charts and Maps</p>
      </Link>
    </div>
  );
}
