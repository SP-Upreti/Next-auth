import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full gap-1 flex-col font-mono text-sm lg:flex">
          <p>Learning authentication with next auth.</p> 
          <p cla><Link href={"/login"} className="underline underline-offset-4">Go to Login Page</Link></p>
      </div>
    </main>
  );
}
