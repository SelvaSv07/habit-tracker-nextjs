import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen py-24 bg-[#ede2cb] flex flex-col flex-col-reverse justify-center md:flex-row md:justify-between md:items-center">
      <div className="md:mx-0 flex flex-col gap-6 md:gap-10 mt-4 md:ml-32 md:mt-12 mx-12">
        <h1 className="text-primary text-3xl font-bold">How's your day?</h1>
        <ul>
          <li className="text-primary font-semibold mt-2">
            Build your career.
          </li>
          <li className="text-primary font-semibold mt-2">Get in shape.</li>
          <li className="text-primary font-semibold mt-2">
            Or learn a new skill.
          </li>
        </ul>
        <Button className="font-semibold w-fit md:px-8">Start Now</Button>
      </div>
      <div>
        <Image
          src="/images/home.png"
          alt="a person holding a laptop"
          width={800}
          height={400}
          className="w-[750px]"
        />
      </div>
    </main>
  );
}
