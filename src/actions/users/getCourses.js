"use server";

import User from "../../model/User";
const { getSession } = require("@auth0/nextjs-auth0");
export const getCourses = async () => {
  const sesion = await getSession();
  const user = sesion.user;
  const userMongo = await User.findOne({ email: user.email }).lean();
  const courses = await User.findById(userMongo._id).populate(
    "purchasedCourses"
  );

  return courses;
};
