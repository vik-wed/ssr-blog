import { lusitana } from "./ui/fonts";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Image
        src="/logo.png"
        width={50}
        height={50}
        alt="Logo showing a little window with Blog written into it"
      />
      <h1 className="text-3xl font-bold text-indigo-400">Test Page</h1>
      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        This is actually a test page
      </p>
    </main>
  );
}
