import type {

  Metadata,

} from "next";

import {

  Geist,
  Geist_Mono,

} from "next/font/google";

import "./globals.css";

import {
  Providers,
} from "./providers";

// =====================================================
// FONTS
// =====================================================

const geistSans = Geist({

  variable:
    "--font-geist-sans",

  subsets:
    ["latin"],
});

const geistMono = Geist_Mono({

  variable:
    "--font-geist-mono",

  subsets:
    ["latin"],
});

// =====================================================
// METADATA
// =====================================================

export const metadata:
  Metadata = {

  title:
    "SkodriNΩN",

  description:
    "Governance-first AI & Web3 ecosystem",
};

// =====================================================
// ROOT LAYOUT
// =====================================================

export default function RootLayout({

  children,

}: Readonly<{

  children:
    React.ReactNode;

}>) {

  return (

    <html

      lang="en"

      suppressHydrationWarning

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >

      <body className="min-h-full flex flex-col bg-black text-white">

        {/* RUNTIME DIAGNOSTICS */}

        <script
          dangerouslySetInnerHTML={{
            __html: `

              window.addEventListener(
                "error",
                function(event) {

                  console.error(
                    "[Runtime Error]",
                    event.error
                  );
                }
              );

              window.addEventListener(
                "unhandledrejection",
                function(event) {

                  console.error(
                    "[Unhandled Promise]",
                    event.reason
                  );
                }
              );

            `,
          }}
        />

        {/* APP */}

        <Providers>

          {children}

        </Providers>

      </body>

    </html>
  );
}