import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../client";

export default function handler(req: NextRequest, res: NextResponse) {
    supabase.auth.api.setAuthCookie(res, req)
}