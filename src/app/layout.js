import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "JetSetGo Food Restaurant Ordering Web Application",
  description: "Next.js 14 Food Restaurant Website With MongoDB Cloud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Link */}
        {/* <link rel="icon" href="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/004/328/original/name_signature_sunny.png?1674207908"/> */}
        <link rel="icon" href="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/004/746/original/fabicon_1.svg?1697787114" type="image/svg+xml/png" />

        {/* bootstrap@5.0.2 CSS link */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
      </head>

      <body className="container">

        <div>{children}</div>

        {/* bootstrap@5.0.2 JS link */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"></script>

      </body>
    </html>
  );
}
