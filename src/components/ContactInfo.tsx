import React from "react";
import { deleteContact } from "../redux/Reducers";
import { useAppDispatch } from "../redux/Store";
import { Link } from "react-router-dom";

interface ContactInfoProps {
  ContactInfos: {
    firstName: string;
    lastName: string;
    status: string;
    id: number;
  };
  updateHandler: () => void;
}

export default function ContactInfo({
  ContactInfos,
  updateHandler,
}: ContactInfoProps) {
  const dispatch = useAppDispatch();

  const deleteHandler = (id: number) => {
    console.log(id);
    dispatch(deleteContact({ id: id }));
  };

  return (
    <div className="bg-gray-200 rounded p-4">
      <img
        className=" mx-auto mt-0"
        style={{ width: "80px" }}
        src="http://getdrawings.com/free-icon/avatar-icon-png-51.png"
        alt="avtar"
      />
      <label className="font-bold mb-2">Person Name</label>
      <div className="flex flex-row gap-2">
        <p>{ContactInfos.firstName}</p>
        <p>{ContactInfos.lastName}</p>
      </div>
      <p className="mb-2">status: {ContactInfos.status}</p>
      <div className="flex flex-wrap gap-2">
        <Link to={`edit/${ContactInfos.id}`}>
          <button className="bg-teal-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Update
          </button>
        </Link>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => deleteHandler(ContactInfos.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
