const { ImageResponse } = require("next/og");
const { writeFile } = require("node:fs/promises");
const path = require("node:path");

async function main() {
  const image = new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0b0e",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(59,130,246,0.35), rgba(10,11,14,0) 60%)",
          fontFamily: "sans-serif",
        },
        children: [
          {
            type: "div",
            props: {
              style: { display: "flex", alignItems: "center", gap: 20 },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: 72,
                      height: 72,
                      borderRadius: 18,
                      background: "#3b82f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: {
                      type: "div",
                      props: {
                        style: {
                          width: 28,
                          height: 28,
                          background: "#f8fafc",
                          clipPath: "polygon(55% 0%, 20% 62%, 48% 62%, 35% 100%, 80% 38%, 52% 38%)",
                        },
                      },
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: { display: "flex", fontSize: 76, fontWeight: 700, color: "#f3f4f6" },
                    children: [
                      { type: "span", props: { children: "Stream" } },
                      { type: "span", props: { style: { color: "#3b82f6" }, children: "Forge" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { marginTop: 28, fontSize: 32, color: "#9aa1ac" },
              children: "Automate your business. Stop losing leads.",
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 }
  );

  const buffer = Buffer.from(await image.arrayBuffer());
  const outPath = path.join(process.cwd(), "public", "og-image.png");
  await writeFile(outPath, buffer);
  console.log(`OG image written to ${outPath} (${buffer.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
