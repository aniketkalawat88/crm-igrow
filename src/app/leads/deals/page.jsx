"use client"

import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import LeadNavbar from "../_components/lead-navbar";

const initialColumns = {
  new: {
    name: "New",
    items: [
      {
        id: "1",
        name: "Chanchal Awasti",
        phone: "9765132481",
        email: "chanchalawasti@gmail.com",
        leadDate: "13-12-2023",
        leadTime: "07:56 pm",
        leadOwner: "Chanchal Awasti",
      },
    ],
  },
  inProcess: {
    name: "In Process",
    items: [],
  },
  invoice: {
    name: "Invoice",
    items: [],
  },
  successfulDeal: {
    name: "Successful Deal",
    items: [],
  },
  pipelineDeals: {
    name: "Pipeline Deals",
    items: [],
  },
};

// Define card colors for each column
const cardColors = {
  new: "-[#DB5AEE]",
  inProcess: "-[#6D69F9]",
  invoice: "-[#FFA800]",
  successfulDeal: "-[#7BB31A]",
  pipelineDeals: "-[#EA3A3D]",
};

const LeadBoard= () => {
  const [columns, setColumns] = useState(initialColumns);
  const [draggingItem, setDraggingItem] = useState(null);
  const [sourceColumnId, setSourceColumnId] = useState(null);

  const handleDragStart = (
    e,
    item,
    columnId
  ) => {
    setDraggingItem(item);
    setSourceColumnId(columnId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, destinationColumnId) => {
    e.preventDefault();

    if (draggingItem && sourceColumnId) {
      const updatedColumns = { ...columns };
      const columnIds = Object.keys(updatedColumns);
      const destIndex = columnIds.indexOf(destinationColumnId);

      if (destIndex === -1) return;

      const sourceColumn = updatedColumns[sourceColumnId];
      if (!sourceColumn) return;

      sourceColumn.items = sourceColumn.items.filter(
        (item) => item.id !== draggingItem.id
      );

      for (const columnId of columnIds) {
        const column = updatedColumns[columnId];
        if (column) {
          column.items = column.items.filter(
            (item) => item.id !== draggingItem.id
          );
        }
      }

      for (let i = 0; i <= destIndex; i++) {
        const columnId = columnIds[i];
        if(columnId){
          const column = updatedColumns[columnId];
          if (column && !column.items.some((item) => item.id === draggingItem.id)) {
            column.items.push({ ...draggingItem });
          }
        }
      }

      setColumns(updatedColumns);
      setDraggingItem(null);
      setSourceColumnId(null);
    }
  };

  return (
    <div>
      <LeadNavbar />
    <div className="flex space-x-4 p-4 overflow-x-scroll">
      {Object.entries(columns).map(([columnId, column]) => (
        <div
          key={columnId}
          className="min-w-80"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, columnId)}
        >
          <h2 className={`funnel mb-2 text-2xl text-white text-center bg${cardColors[columnId]} p-2.5`}>{column.name}</h2>
          <div className="min-h-screen rounded bg-gray-800 p-4 ">
            {column.items.map((item, index) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => {
                  handleDragStart(e, item, columnId);
                  e.dataTransfer.setData("index", index.toString());
                }}
                className={`rounded p-4 text-black bg-white text-sm grid gap-3`}
              >
                <p className="flex items-center text-[#595656] gap-1"><FaRegUser /> Name: <span className="text-black ml-2"> {item.name}</span></p>
                <p className="flex items-center text-[#595656] gap-1"><FiPhoneCall /> Phone: <span className="text-black ml-2"> {item.phone}</span></p>
                <p className="flex items-center text-[#595656] gap-1"><CiMail /> Email: <span className="text-black ml-2"> {item.email}</span></p>
                <p className="flex items-center text-[#595656] gap-1"><BsCalendar4Week /> Lead Date: <span className="text-black ml-2"> {item.leadDate}</span></p>
                <p className="flex items-center text-[#595656] gap-1"><MdOutlineTimer /> Lead Time: <span className="text-black ml-2"> {item.leadTime}</span></p>
                <p className="flex items-center text-[#595656] gap-1"><FaRegUser /> Lead Owner: <span className="text-black ml-2"> {item.leadOwner}</span></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default LeadBoard;
