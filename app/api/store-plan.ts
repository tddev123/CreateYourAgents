import { NextRequest, NextResponse } from "next/server";

let selectedPlan: { planName: string; price: number } | null = null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    selectedPlan = body;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to store plan" }, { status: 500 });
  }
}

export async function GET() {
  if (selectedPlan) {
    return NextResponse.json(selectedPlan);
  } else {
    return NextResponse.json({ error: "No plan selected" }, { status: 404 });
  }
}
