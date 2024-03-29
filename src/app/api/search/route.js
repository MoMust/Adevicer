import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
// GET REVIEW BY SEARCH

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const searchInput = searchParams.get("title");
  try {
    const review = await prisma.review.findMany({
      where: {
        title: searchInput,
      },
    });

    return new NextResponse(JSON.stringify(review, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
