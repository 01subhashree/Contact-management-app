import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/Store";
import { updateContact } from "../redux/Reducers";

interface ContactInfoProps {
  firstName: string;
  lastName: string;
  status: string;
  id: number;
}

export default function EditContact() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  const selector = useAppSelector((state) => state.contact.contacts);
  const dispatch = useAppDispatch();

  const contact: ContactInfoProps | undefined = selector.find(
    (ele: ContactInfoProps) => ele.id === Number(id)
  );

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setStatus(contact.status);
    }
  }, [contact]);

  const clickHandler = () => {
    navigate("/");
  };

  const editContactHandler = () => {
    if (contact) {
      const updatedContact: ContactInfoProps = {
        ...contact,
        firstName,
        lastName,
        status,
      };
      dispatch(updateContact(updatedContact));
    }
    navigate("/");
  };

  return (
    <div className="pl-4">
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Status:</p>
          <span className="flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              checked={status === "Active"}
              onChange={() => setStatus("Active")}
            />
            <label className="text-sm">Active</label>
            <input
              className="ml-4 mr-2 leading-tight"
              type="checkbox"
              checked={status === "Inactive"}
              onChange={() => setStatus("Inactive")}
            />
            <label className="text-sm">Inactive</label>
          </span>
        </div>
        <div className="flex justify-around">
          <button
            className="bg-violet-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={editContactHandler}
          >
            Edit
          </button>
          <button
            className="bg-pink-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={clickHandler}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
