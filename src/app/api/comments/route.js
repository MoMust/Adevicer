import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";
// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const reviewSlug = searchParams.get("reviewSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(reviewSlug && { reviewSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();
  const body = await req.json();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not authenticated" }, { status: 401 })
    );
  }

  try {
    const comment = await prisma.comment.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
