import { NextRequest, NextResponse } from "next/server";

type AgentRunRequest = {
  agentSlug: string;
  input: Record<string, unknown>;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AgentRunRequest;

    if (!body.agentSlug) {
      return NextResponse.json(
        { ok: false, code: "VALIDATION_ERROR", error: "Missing agentSlug" },
        { status: 400 }
      );
    }

    if (!body.input || typeof body.input !== "object") {
      return NextResponse.json(
        { ok: false, code: "VALIDATION_ERROR", error: "Missing input object" },
        { status: 400 }
      );
    }

    // TODO:
    // 1. Load agent config from /lib/agents/[agentSlug].json
    // 2. Build system prompt from config
    // 3. Call Vercel AI SDK / AI Gateway from the server
    // 4. Return structured markdown or JSON output

    return NextResponse.json({
      ok: true,
      agentSlug: body.agentSlug,
      outputMarkdown: "TODO: Generated output goes here.",
      sections: {}
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        code: "SERVER_ERROR",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
