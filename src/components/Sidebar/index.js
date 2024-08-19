import React from "react";
import Course from "../../model/Course";

export default async function Sidebar() {
  const courses = await Course.find({
    title: "Desarrollo Front-End",
  }).lean();

  return (
    <aside className="w-64 bg-gray-200 p-4 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">{courses[0].title}</h2>
      {Array.isArray(courses) && courses.length > 0 ? (
        courses[0].modules.map((module) => (
          <div key={module._id} className="mb-4">
            <h3 className="text-lg font-semibold">{module.title}</h3>
            <ul>
              {module.classes.map((classItem, index) => (
                <li
                  key={classItem._id}
                  className="mb-2 p-2 bg-white rounded shadow-sm"
                >
                  {classItem.className}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </aside>
  );
}
