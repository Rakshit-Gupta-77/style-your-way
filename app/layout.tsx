import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Style Your Way - Custom Clothing & Design",
  description:
    "Express yourself with custom clothing. Design unique t-shirts, hoodies, caps, and more with our easy customization tools.",
  authors: [{ name: "Style Your Way" }],
  openGraph: {
    title: "Style Your Way - Custom Clothing & Design",
    description:
      "Express yourself with custom clothing. Design unique t-shirts, hoodies, caps, and more.",
    type: "website",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1570168c-3b0d-4587-a476-26392324d965/id-preview-b4e987a8--9c5914f3-d28e-4e77-844b-ac1c791c41b1.lovable.app-1762716402299.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1570168c-3b0d-4587-a476-26392324d965/id-preview-b4e987a8--9c5914f3-d28e-4e77-844b-ac1c791c41b1.lovable.app-1762716402299.png",
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
  const enableBadge = process.env.NEXT_PUBLIC_ENABLE_BADGE === "true";
  return (
    <html lang="en">
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1000001] rounded bg-black px-3 py-2 text-white"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <Navbar />
        </header>
        <div id="root" className="min-h-screen">
          <main id="content" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
        <Footer />

        {enableBadge && (
          <>
            <a
              id="lovable-badge"
              target="_blank"
              href="https://lovable.dev/projects/9c5914f3-d28e-4e77-844b-ac1c791c41b1?utm_source=lovable-badge"
              style={{
                position: "fixed",
                bottom: 10,
                right: 10,
                width: 141,
                padding: "5px 13px",
                backgroundColor: "#000",
                color: "#fff",
                fontSize: 12,
                borderRadius: 5,
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 4,
                zIndex: 1000000,
                textTransform: "none",
                fontFeatureSettings: "normal",
                fontWeight: 400,
              }}
            >
              <span style={{ color: "#A1A1AA" }}>Edit with</span>
              <svg width="60" height="12" viewBox="0 0 116 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="116" height="22" fill="transparent" />
              </svg>
              <button
                id="lovable-badge-close"
                style={{
                  position: "absolute",
                  top: -2,
                  right: 5,
                  cursor: "pointer",
                  fontSize: 14,
                  color: "#A1A1AA",
                  background: "transparent",
                  border: "none",
                }}
              >
                &times;
              </button>
            </a>
            <Script id="lovable-badge-control" strategy="afterInteractive">{`
              (function() {
                try {
                  if (window.self !== window.top || navigator.userAgent.includes('puppeteer')) {
                    var badge = document.getElementById('lovable-badge');
                    if (badge) badge.style.display = 'none';
                  }
                  var closeButton = document.getElementById('lovable-badge-close');
                  if (closeButton) {
                    closeButton.addEventListener('click', function(event) {
                      event.preventDefault();
                      event.stopPropagation();
                      var badge = document.getElementById('lovable-badge');
                      if (badge) badge.style.display = 'none';
                    });
                  }
                } catch (_) {}
              })();
            `}</Script>
          </>
        )}

        {enableAnalytics && (
          <Script
            src="https://style-your-way-studio.lovable.app/~flock.js"
            strategy="afterInteractive"
            {...{ "data-proxy-url": "https://style-your-way-studio.lovable.app/~api/analytics" }}
          />
        )}
      </body>
    </html>
  );
}
