import Image from "next/image";
import Gadgets from "./components/showGadgets/page";
import ReviewList from "./components/reviewList/reviewList";
import Link from "next/link";
import SideBar from "./components/sideBar/sideBar";

export default function Home() {
  return (
    <div className=" grid grid-cols-10 min-h-screen">
      <SideBar />
      <div className="font-tomorrow lg:col-span-8 col-span-10 flex flex-col items-center gap-14 justify-center card-container">
        <div className="border rounded-md w-4/6 card">
          <div className="pt-12">
            <h1 className="text-center lg:text-3xl">Title</h1>
          </div>
          <div className=" bg-gray-100 flex mt-5 justify-center">
            <Image src="/images/lenovo.png" width={250} height={250} />
          </div>
          <div className="flex justify-center mt-5">
            <span>27-12-2023</span>
          </div>
          <div className="flex justify-center">
            <div className="rounded flex flex-row gap-10 bg-gray-100 mt-4 p-3 pl-6 w-80 h-12">
              <div className="flex gap-2">
                <div>
                  <Image src="/icons/heartGrey.png" width={20} height={20} />
                </div>
                <div className="text-center">
                  <span className="">Like</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <Image src="/icons/comment.png" width={20} height={20} />
                </div>
                <div className="text-center">
                  <span>23 </span>
                  <span>Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-md w-4/6 card">
          <div className="pt-12">
            <h1 className="text-center lg:text-3xl">Title</h1>
          </div>
          <div className=" bg-gray-100 flex mt-5 justify-center">
            <Image src="/images/lenovo.png" width={250} height={250} />
          </div>
          <div className="flex justify-center mt-5">
            <span>27-12-2023</span>
          </div>
          <div className="flex justify-center">
            <div className="rounded flex flex-row gap-10 bg-gray-100 mt-4 p-3 pl-6 w-80 h-12">
              <div className="flex gap-2">
                <div>
                  <Image src="/icons/heartGrey.png" width={20} height={20} />
                </div>
                <div className="text-center">
                  <span className="hidden lg:block">Like</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <Image src="/icons/comment.png" width={20} height={20} />
                </div>
                <div className="text-center hidden lg:block">
                  <span>23 </span>
                  <span>Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-md w-4/6 card">
          <div className="pt-12">
            <h1 className="text-center lg:text-3xl">Title</h1>
          </div>
          <div className=" bg-gray-100 flex mt-5 justify-center">
            <Image src="/images/lenovo.png" width={250} height={250} />
          </div>
          <div className="flex justify-center mt-5">
            <span>27-12-2023</span>
          </div>
          <div className="flex justify-center">
            <div className="rounded flex flex-row gap-10 bg-gray-100 mt-4 p-3 pl-6 w-80 h-12">
              <div className="flex gap-2">
                <div>
                  <Image src="/icons/heartGrey.png" width={20} height={20} />
                </div>
                <div className="text-center">
                  <span className="hidden lg:block">Like</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <Image src="/icons/comment.png" width={20} height={20} />
                </div>
                <div className="text-center hidden lg:block">
                  <span>23 </span>
                  <span>Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
