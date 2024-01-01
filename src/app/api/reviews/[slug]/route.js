import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
// GET SINGEL POST

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const review = await prisma.review.findUnique({
      where: { slug },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(review, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
