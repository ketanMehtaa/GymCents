import { authOptions } from "@/app/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse(
        "Unauthenticated session not found in allcourses",
        { status: 401 },
      );
    }

    return Response.json({
      status: 200,
      data: "courses",
    });
  } catch (error: any) {
    return Response.json({
      status: 500,
      body: `Error: ${error.message}`,
    });
  }
}

export async function POST(req: Request) {}
