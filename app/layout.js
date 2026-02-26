import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinTrack",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-10">
            <div className="max-w-7xl mx-auto px-6">

              {/* Top Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand Section */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    FinTrack
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-400">
                    AI-powered finance tracking platform that helps you monitor,
                    analyze, and optimize your spending with real-time intelligence.
                  </p>
                </div>

                {/* Product Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Product</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/dashboard" className="hover:text-white transition">Dashboard</a></li>
                    <li><a href="#" className="hover:text-white transition">AI Receipt Scanner</a></li>
                    <li><a href="#" className="hover:text-white transition">Analytics</a></li>
                    <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                  </ul>
                </div>

                {/* Company Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    <li><a href="#" className="hover:text-white transition">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  </ul>
                </div>

                {/* Support Section */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Support</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                    <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                    <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                  </ul>

                  {/* Social Media */}
                  <div className="flex gap-4 mt-6">
                    <a href="#" className="hover:text-white transition">Twitter</a>
                    <a href="#" className="hover:text-white transition">LinkedIn</a>
                    <a href="#" className="hover:text-white transition">GitHub</a>
                  </div>
                </div>

              </div>

              {/* Divider */}
              <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} FinTrack. All rights reserved.
              </div>

            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
