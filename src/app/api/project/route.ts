import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const projects = await prisma.projects.findMany();

  return NextResponse.json(projects);
}
