import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#141310",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#F0ECE4" }}>B</span>
          <span style={{ color: "#C4A87A", fontSize: 48, margin: "0 4px" }}>
            &
          </span>
          <span style={{ color: "#F0ECE4" }}>N</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#C4A87A",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
