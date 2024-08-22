import React from "react";

export default function Sidebar({ course, setSelectedClass }) {
  return (
    <aside className="w-64 bg-gray-200 p-4 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">{course.title}</h2>
      {course?.modules?.map((module) => (
        <div key={module._id} className="mb-4">
          <h3 className="text-lg font-semibold">{module?.title}</h3>
          <ul key={module._id}>
            {module.classes.map((classItem, index) => (
              <li
                key={classItem._id}
                className={`mb-2 p-2 rounded shadow-sm ${
                  module.locked
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-white cursor-pointer"
                }`}
                onClick={() => !module.locked && setSelectedClass(classItem)}
              >
                {classItem.className}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
