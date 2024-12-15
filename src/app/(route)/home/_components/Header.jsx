import Image from "next/image";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function Header() {
  const today = format(new Date(), "MMM d");

  return (
    <div className="bg-[#efb67e] w-full flex justify-between px-6 py-4 mt-3 rounded-lg items-center">
      <p className="text-2xl font-bold">{today}</p>
      <Button className="px-6 font-semibold">Login</Button>
    </div>
  );
}
