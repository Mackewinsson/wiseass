import { getSession } from "@auth0/nextjs-auth0";
import User from "../../../model/User";
import Course from "../../../model/Course";
import Link from "next/link";

export default async function CourseList() {
  const session = await getSession();
  const user = session?.user;
  const userMongo = await User.findOne({ email: user?.email }).populate(
    "purchasedCourses"
  );
  const coursesOwned = userMongo?.purchasedCourses;
  console.log(coursesOwned);

  return (
    <main className="flex min-h-screen justify-center items-center bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {coursesOwned?.map((course) => (
          <div
            key={course._id}
            className="card w-96 bg-base-100 shadow-xl border border-gray-600"
          >
            <div className="card-body flex flex-col items-center justify-center text-center">
              <h2 className="card-title text-black text-xl font-bold">
                {course.title || "Untitled Course"}
              </h2>
              <p className="text-gray-300 mt-4">
                {course.description || "No description available."}
              </p>
              <div className="card-actions mt-6">
                <Link href={`/school/courses/${course._id}`} passHref>
                  <button className="btn btn-primary">Ir al curso</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
