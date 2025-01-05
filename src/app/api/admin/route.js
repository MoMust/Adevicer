import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

export const POST = async (req) => {

  const session = await getAuthSession();
  console.log("Session från Prisma:", session);

  try {
    const body = await req.json();
    const { title, content, gadgetId, rating, slug, searchSlug } = body;

    // Find the gadget and include its category
    const gadget = await prisma.gadget.findUnique({
      where: { id: gadgetId },
      include: { category: true },
    });

    // Create the review
    const review = await prisma.review.create({
      data: {
        title,
        content,
        slug,
        searchSlug,
        rating: rating || 0, // Default rating to 0 if not provided
        gadget: {
          connect: { id: gadgetId }, // Connect the review to the gadget
        },
        cat: {
          connect: { id: gadget.category.id }, // Connect the review to the category
        },
        createdAt: new Date(),
        user: {
          connect: { email: session.user.email }, // Connect the review to the user
        },
       
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
};
