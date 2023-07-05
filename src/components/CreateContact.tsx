import React, { useState } from "react";
import { useAppDispatch } from "../redux/Store";
import { addContact } from "../redux/Reducers";

interface CreateContactProps {
  setCreateContact: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateContact({
  setCreateContact,
}: CreateContactProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useAppDispatch();

  const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "" && status !== "") {
      let contactInfo = {
        id: Math.random() * 100,
        firstName: firstName,
        lastName: lastName,
        status: status,
      };
      dispatch(addContact(contactInfo));
      setFirstName("");
      setLastName("");
      setStatus("");
      setCreateContact(false);
    } else if (firstName === "" || lastName === "") {
      alert("OHHH No🙀🙀 you forgot your name check Adhar and fill it👌👍");
    } else {
      alert("please fill all Required input");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Contact</h1>
      <form className="mb-4" onSubmit={addHandler}>
        <label className="block mb-2 font-bold text-lg">First Name:</label>
        <input
          className="border rounded px-2 py-1 mb-2"
          placeholder="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="block mb-2 font-bold text-lg">Last Name:</label>
        <input
          className="border rounded px-2 py-1 mb-2"
          placeholder="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p className="mb-2 font-bold text-lg">Status:</p>
        <span>
          <input
            className="mr-1"
            type="checkbox"
            checked={status === "Active"}
            onChange={() => setStatus("Active")}
          />
          <label className="mr-2 ">Active</label>
          <input
            className="mr-1"
            type="checkbox"
            checked={status === "Inactive"}
            onChange={() => setStatus("Inactive")}
          />
          <label>Inactive</label>
        </span>
        <div className="flex justify-end  gap-4 xs:gap-4 sm:gap-6 mt-12 mt-12">
          <button className="bg-pink-700 hover:bg-voilet-700 text-white font-bold py-2 px-4 rounded">
            Save Contact
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded w-26"
            onClick={() => setCreateContact(false)}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
