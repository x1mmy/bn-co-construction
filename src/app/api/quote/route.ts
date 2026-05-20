import { NextResponse } from "next/server";
import type { FormPayload } from "@/lib/submitForm";

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Form submission is not configured." },
      { status: 503 }
    );
  }

  let payload: FormPayload;
  try {
    payload = (await request.json()) as FormPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!payload.firstName?.trim() || !payload.phone?.trim() || !payload.email?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const raw = await upstream.text();
    let parsed: { ok?: boolean; error?: string } | null = null;
    try {
      parsed = JSON.parse(raw) as { ok?: boolean; error?: string };
    } catch {
      parsed = null;
    }

    if (!upstream.ok || (parsed && parsed.ok === false)) {
      return NextResponse.json(
        {
          ok: false,
          error: parsed?.error || "Google Sheets handler rejected the submission.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach the form handler." },
      { status: 502 }
    );
  }
}
