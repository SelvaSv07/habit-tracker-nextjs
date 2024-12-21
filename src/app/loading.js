import { Loader } from "lucide-react";

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex flex-col h-screen gap-4 justify-center items-center">
      <Loader className="animate-spin h-6 w-6" />
      <p>{message}</p>
    </div>
  );
}
