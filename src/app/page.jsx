import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-5 min-h-screen text-center  items-stretch">
     <div className="relative">
      <h2 className="text-4xl">Next Js Fetching & Rendering</h2>
      <h2 className="text-8xl">Fetching Rendering & Styling</h2>
     </div>
     <div className="">
      <button className="btn"> Lets Explore</button>
     </div>
    </div>
  );
}
