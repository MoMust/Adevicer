import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");
  const searchInput = searchParams.get("title");
  const searchSlug = searchParams.get("searchSlug");

  let whereClause = {};

  if (cat || searchInput || searchSlug) {
    whereClause = {
      OR: [
        ...(cat ? [{ catSlug: cat }] : []),
        ...(searchInput ? [{ slug: searchInput }] : []),
        ...(searchSlug ? [{ searchSlug: searchSlug }] : []),
      ],
    };
  }
  try {

    const review = await prisma.review.findMany({
      include: { comments: true, user: true, gadget: true },
      where: whereClause,
    });


    return new NextResponse(JSON.stringify({ review }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
