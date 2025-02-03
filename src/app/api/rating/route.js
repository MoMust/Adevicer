import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

export const PATCH = async (req) => {
  const session = await getAuthSession();
  const body = await req.json();

  if (!session) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const review = await prisma.review.update({
      where: { slug: body.slug },
      data: {
        rating: body.rating,
      },
    });

    return new NextResponse(JSON.stringify(review), { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
