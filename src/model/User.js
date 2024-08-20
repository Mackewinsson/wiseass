import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    given_name: String,
    nickname: String,
    picture: String,
    locale: String,
    updated_at: Date,
    email: String,
    email_verified: Boolean,
    sub: String,
    sid: String,
    subscriptionType: {
      type: String,
      enum: ["free", "pro"],
      default: "free",
    },
    purchasedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // Reference to the Course model
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
