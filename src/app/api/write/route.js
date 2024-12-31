import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

export const POST = async (req) => {
  const session = await getAuthSession();
  const body = await req.json();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not authenticated" }), {
      status: 401,
    });
  }

  try {
    const review = await prisma.review.create({
      data: {
        content: body.content,
        rating: body.rating,
        gadget: { connect: { id: body.gadgetId } },
        user: { connect: { id: session.user.id } },
        catSlug: body.catSlug, // Adding catSlug if needed
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
