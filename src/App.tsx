import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import EditContact from "./components/EditContact";
import SideBar from "./components/SideBar";
import "./App.css";
import ChatMap from "./pages/Chat&Map";

function App() {
  return (
    <div className="flex w-full h-full flex-col">
      <h1 className="z-50 w-full h-20 fixed top-0 text-center p-4 text-2xl text-[#f5deb3] font-bold bg-gradient-to-br from-purple-700 to-black  ">
        Contact Management App
      </h1>
      <div className="flex flex-row mt-24 w-full pb-8">
        <span className="sticky top-0 w-1/3">
          <SideBar />
        </span>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/chat&map" element={<ChatMap />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
