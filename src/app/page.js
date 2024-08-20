import createUser from "../actions/users/createUser";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await createUser();
  if (user) {
    redirect("/school");
  }
  return <main className="flex min-h-screen"></main>;
}
