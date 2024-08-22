import createUser from "../actions/users/createUser";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await createUser();
  const handleRedirect = () => {
    if (user?.purchasedCourses?.length > 0) {
      redirect(`/school/courses/${user.purchasedCourses[0]._id}`);
    }
  };
  handleRedirect();
  return <main className="flex min-h-screen"></main>;
}
