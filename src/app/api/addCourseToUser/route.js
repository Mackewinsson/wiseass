import Course from "../../../model/Course";
import User from "../../../model/User";
import connectDB from "../../lib/connectDB";
import mongoose from "mongoose";

export async function POST(req, res) {
  await connectDB(); // Connect to the database

  const { userId, courseId } = await req.json(); // Parse the JSON body

  // Validate the IDs
  if (
    !mongoose.Types.ObjectId.isValid(userId) ||
    !mongoose.Types.ObjectId.isValid(courseId)
  ) {
    return new Response(
      JSON.stringify({ error: "Invalid user or course ID" }),
      { status: 400 }
    );
  }

  try {
    // Find the user by ID and add the course ID to their purchasedCourses array
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { purchasedCourses: courseId } }, // $addToSet ensures no duplicates
      { new: true } // Return the updated document
    ).populate("purchasedCourses"); // Optionally populate the purchasedCourses field

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Course added to user", user }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred while updating the user" }),
      { status: 500 }
    );
  }
}
