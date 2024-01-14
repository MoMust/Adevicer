import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");
  const title = searchParams.get("title");

   let whereClause = {};

   if (cat || title) {
     whereClause = {
       OR: [
         ...(cat ? [{ catSlug: cat }] : []),
         ...(title ? [{ slug: title }] : []),
       ],
     };
   }
  try {
     const review = await prisma.review.findMany({
       include: { comments: true },
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
