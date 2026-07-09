import { ImageResponse } from "next/og";
import { BRAND, BrandMark } from "@/lib/brandAssets";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.olive,
          borderRadius: 36,
        }}
      >
        <BrandMark blobColor={BRAND.logoCream} dotColor={BRAND.logoLeaf} size={100} />
      </div>
    ),
    { ...size },
  );
}
