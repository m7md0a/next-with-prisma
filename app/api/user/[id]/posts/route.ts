import { db } from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";
import { PropsMethodParamsType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: PropsMethodParamsType) {
  const accessToken = req.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: { userId: params.id },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
        },
      },
      comments: {
        select: {
          id: true,
          text: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
      },
      likes: {
        select: {
          user: {
            select: {
              id: true,
              name: true,
              username: true,
            },
          },
        },
      },
    },
  });
  return NextResponse.json({ posts }, { status: 200 });
}
