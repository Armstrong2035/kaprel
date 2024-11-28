export const metadata = {
  title: "Kapral proposal",
  description: "The proposal for the Kapral website rebuild",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
