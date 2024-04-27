import { PrismaClient } from '@prisma/client';
import { handleRequest } from 'bridg/server/request-handler';
import { NextRequest, NextResponse } from 'next/server';
import { rules } from '../../../../prisma/bridg';

const db = new PrismaClient();

export async function POST(request: NextRequest) {
  // Mock authentication, replace with any auth system you want
  const userId = 'authenticated-user-id';
  const body = await request.json();

  const { data, status } = await handleRequest(body, {
    db,
    uid: userId,
    rules,
  });

  return NextResponse.json(data, { status });
}
