import createUser from "../actions/users/createUser";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await createUser();
  console.log(user);

  const handleRedirect = () => {
    if (user) {
      redirect(`/school/courses`);
    }
  };
  handleRedirect();
  return <main className="flex min-h-screen"></main>;
}
