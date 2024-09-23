"use client";
import Sidebar from "@component/Sidebar";
import { getCourse } from "../../../../actions/users/getCourse";
import { useEffect, useState } from "react";

export default function CourseDetail({ params }) {
  const [course, setCourse] = useState({});
  const [selectedClass, setSelectedClass] = useState(null);

  const fetchCourse = async () => {
    const course = await getCourse(params.id);
    setCourse(course);
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <main className="flex min-h-screen">
      {course && (
        <Sidebar course={course} setSelectedClass={setSelectedClass} />
      )}
      <div className="flex-1 p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {selectedClass?.className || "Select a class"}
        </h1>
        <div className="bg-black h-full w-full flex items-center justify-center">
          {selectedClass?.videoUrl ? (
            <iframe
              src={selectedClass.videoUrl.replace(
                "vimeo.com",
                "player.vimeo.com/video"
              )}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={selectedClass.className}
            ></iframe>
          ) : (
            <p className="text-white">Video will render here</p>
          )}
        </div>
      </div>
    </main>
  );
}
