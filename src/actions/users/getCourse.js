"use server";

import Course from "../../model/Course";

export const getCourse = async (courseId) => {
  const course = await Course.findOne({
    _id: courseId,
  }).lean();

  return course;
};
