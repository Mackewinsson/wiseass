import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
  {
    className: String,
    description: String,
    duration: String, // Duration as a string (e.g., "1 hour", "1.5 hours")
  },
  {
    _id: false, // No need for a separate _id for each class
  }
);

const ModuleSchema = new mongoose.Schema(
  {
    title: String, // e.g., "Git and GitHub", "HTML", "CSS", etc.
    classes: [ClassSchema],
  },
  {
    _id: false, // No need for a separate _id for each module
  }
);

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // e.g., "Front-End Development"
    description: { type: String, required: true }, // Description of the course
    modules: [ModuleSchema], // Array of modules
  },
  {
    timestamps: true, // Add createdAt and updatedAt timestamps
  }
);

export default mongoose.model("Course", CourseSchema);
