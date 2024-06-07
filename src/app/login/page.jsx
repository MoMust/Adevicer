"use client";
import React, { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const { data, status } = useSession();
  const router = useRouter();

  // console.log(data, status);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center mt-40 gap-6">
        <Image
          src="/logo/AdvicerLogo.png"
          className="rounded-lg"
          width={100}
          height={100}
          alt="logo"
        />
        <div className="flex items-center font-bold text-lg">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Makes sure login page does not show after authentication
  if (status === "authenticated") {
    return null;
  }

  return (
    <div className="flex justify-center border h-full font-tomorrow">
      <div className="relative flex flex-col justify-center content-center bg-zinc-900 lg:w-1/2 md:w-4/5 sm:w-full h-full mt-20 mb-20">
        <div className="absolute top-20 left-0 right-0 mr-auto ml-auto">
          <h1 className="text-center text-white text-4xl">
            Login to your account
          </h1>
        </div>
        <div className="text-center flex flex-col h-full justify-center items-center gap-20 mb-20 mt-52">
          <button
            onClick={() => signIn("google")}
            className="flex flex-row justify-center items-center border lg:w-1/3 md:w-1/2  sm:w-1/2 h-20 bg-white text-black rounded-md"
          >
            <div className="pr-10">
              <GoogleIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="font-bold">Login with Google</div>
          </button>
          <button className="flex flex-row justify-center items-center border lg:w-1/3  md:w-1/2 sm:w-1/2 h-20 bg-white text-black rounded-md">
            <div className="pr-10">
              <FacebookIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="font-bold">Login with Facebook</div>
          </button>
          <button className="flex flex-row justify-center items-center border lg:w-1/3  md:w-1/2 sm:w-1/2 h-20 bg-white text-black rounded-md">
            <div className="pr-10">
              <GitHubIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="font-bold">Login with Github</div>
          </button>
        </div>
        <div className="text-center flex h-24 text-white justify-center mb-20">
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
