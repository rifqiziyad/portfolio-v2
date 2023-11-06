import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rifqi Ziyad Imtinan",
  description:
    "Frontend Developer berpengalaman lebih dari 2 tahun dengan keahlian dalam menciptakan UI yang menarik dan responsif. ",
  icons: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
