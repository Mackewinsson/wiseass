import Sidebar from "@component/Sidebar";

export default async function School() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        {/* This is where the video will be rendered */}
        <div className="bg-black h-full w-full flex items-center justify-center">
          <p className="text-white">Video will render here</p>
        </div>
      </div>
    </main>
  );
}
