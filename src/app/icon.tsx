import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F3F5F7",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            backgroundImage: "linear-gradient(135deg, #1A8A9E 0%, #2A7DE1 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          AI
        </div>
      </div>
    ),
    { ...size }
  );
}
