import { ImageResponse } from "next/og";
import { BRAND, BrandMark, BrandWordmark } from "@/lib/brandAssets";
import { SITE_NAME } from "@/lib/site";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(145deg, ${BRAND.olive} 0%, ${BRAND.ink} 100%)`,
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <BrandMark blobColor={BRAND.logoCream} dotColor={BRAND.logoLeaf} size={120} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <BrandWordmark color={BRAND.bone} height={88} />
            <div
              style={{
                marginTop: 16,
                fontSize: 26,
                fontWeight: 600,
                color: BRAND.leaf,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              {BRAND.tagline}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 56,
            fontSize: 32,
            fontWeight: 500,
            color: BRAND.mint,
            textAlign: "center",
          }}
        >
          Concierge Physical Therapy · Tulsa, OK
        </div>
      </div>
    ),
    { ...size },
  );
}
