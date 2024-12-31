import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const {searchParams} = new URL(req.url)
  const category = searchParams.get("cat")
  try {
    const gadgets = await prisma.gadget.findMany({
      where: {
        ...(category && {
          category: {
            name: category
          }
        })
      }
    });
    // console.log("Fetched gadgets:", gadgets);

    return new NextResponse(JSON.stringify({ gadgets }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
