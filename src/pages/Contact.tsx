import React, { useState } from "react";
import { useAppSelector } from "../redux/Store";
import ContactInfo from "../components/ContactInfo";
import CreateContact from "../components/CreateContact";

export default function Contact() {
  const [createContact, setCreateContact] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState<number>(0);

  const selector = useAppSelector((state) => state.contact.contacts);

  console.log(updateId);

  const updateHandler = (updateId: number) => {
    setIsUpdate(true);
    setUpdateId(updateId);
  };

  return (
    <div className="flex flex-col w-full pt-6 pl-4 items-start gap-10 ">
      {createContact ? (
        <CreateContact setCreateContact={setCreateContact} />
      ) : (
        <>
          <div className="flex justify-center w-full ">
            <button
              className="bg-purple-900 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setCreateContact(true)}
            >
              Create Contact
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pr-4">
            {selector &&
              selector.map((ele) => (
                <div key={ele.id}>
                  <ContactInfo
                    ContactInfos={ele}
                    updateHandler={() => updateHandler(ele.id)}
                  />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
