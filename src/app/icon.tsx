import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginTop: -1,
          }}
        >
          <span style={{ color: "#F0ECE4" }}>B</span>
          <span style={{ color: "#C4A87A", fontSize: 11, margin: "0 1px" }}>
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
            height: 3,
            background: "#C4A87A",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
