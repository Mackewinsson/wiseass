"use client";
import React from "react";
import seedDB from "../../seed";

export default function Sidebar() {
  // Example data for the class list
  const classes = [
    { id: 1, name: "Class 1" },
    { id: 2, name: "Class 2" },
    { id: 3, name: "Class 3" },
  ];

  return (
    <aside className="w-64 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Class List</h2>
      <ul>
        {classes.map((classItem) => (
          <li
            key={classItem.id}
            className="mb-2 p-2 bg-white rounded shadow-sm"
          >
            {classItem.name}
          </li>
        ))}
      </ul>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={async () => {}}
      >
        seed
      </button>
    </aside>
  );
}
