import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="bg-[#efb67e] w-full flex justify-between px-6 py-4 mt-3 rounded-lg items-center">
      <Image
        className="rounded-lg"
        src="/images/logo.webp"
        alt="logo"
        width={50}
        height={50}
      />
      <Button className="px-6 font-semibold">Login</Button>
    </div>
  );
}
