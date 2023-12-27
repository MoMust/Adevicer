import Image from "next/image";
import Gadgets from "./components/showGadgets/page";
import ReviewList from "./components/reviewList/reviewList";
import Link from "next/link";
import SideBar from "./components/sideBar/sideBar";
export default function Home() {
  return (
    <div className=" grid grid-cols-10 min-h-screen">
      <SideBar/>
      <div className="border col-span-8">Content</div>
    </div>
  );
}
