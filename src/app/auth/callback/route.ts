import { createServerSupabaseClient } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const redirectTo = request.url.includes("error")
    ? "/login?error=invalid_request"
    : "/dashboard";
  
  return NextResponse.redirect(new URL(redirectTo, request.url));
} 