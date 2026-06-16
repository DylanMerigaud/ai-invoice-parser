import { ImageResponse } from "next/og";

/**
 * The social preview card (1200×630) shown when the demo link is shared in
 * Slack / email / X / LinkedIn. Rendered at build time by next/og — no external
 * service. Mirrors the in-app fintech palette (cool canvas + indigo accent) so
 * the unfurl looks like a deliberate product, not a bare title.
 */

export const runtime = "nodejs";
export const alt =
  "AI Invoice Parser — drop a PDF and get schema-validated structured data plus anomaly flags";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0A0A0A";
const MUTED = "#6B7280";
const ACCENT = "#4F46E5";
const ACCENT_SOFT = "#EEF2FF";
const LINE = "#E5E7EB";

export default function OpengraphImage() {
  const flow = ["PDF invoice", "Claude", "Validated JSON", "Anomaly flags"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAFA",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: wordmark + a small accent tag */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              background: ACCENT,
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: INK, letterSpacing: -0.5 }}>
            AI Invoice Parser
          </div>
        </div>

        {/* Middle: headline + subline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Any invoice PDF, into structured data.
          </div>
          <div style={{ fontSize: 27, color: MUTED, lineHeight: 1.4, maxWidth: 940 }}>
            Drop a PDF → schema-validated structured data plus automated anomaly
            flags. Claude reads the document directly — every result is validated
            with Zod before you see it.
          </div>
        </div>

        {/* Pipeline flow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {flow.map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#FFFFFF",
                  border: `1px solid ${LINE}`,
                  borderRadius: 999,
                  padding: "12px 22px",
                  fontSize: 24,
                  color: INK,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 26,
                    height: 26,
                    borderRadius: 999,
                    background: ACCENT_SOFT,
                    color: ACCENT,
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </div>
                {label}
              </div>
              {i < flow.length - 1 && (
                <div style={{ fontSize: 26, color: LINE }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Footer: stack + author */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: MUTED,
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
          }}
        >
          <div>Next.js · TypeScript · Claude Sonnet 4.6</div>
          <div style={{ color: INK }}>Dylan Mérigaud</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
