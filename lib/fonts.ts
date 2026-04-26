import {
    Geist,
    Geist_Mono,
    Playfair_Display,
    Nunito,
    Inter,
    Poppins,
    Cairo,
    Noto_Naskh_Arabic,
    Amiri,
    Imperial_Script,
    Lemonada,
    Reem_Kufi,
    Tajawal,
    Almarai,
} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/* ─── Arabic UI (géométrique, modern) ─── */
export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-arabic-ui",
  display: "swap",
});

/* ─── Arabic text long ─── */
export const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

/* ─── Literary / Quran ─── */
export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-quran",
  display: "swap",
});

/* ─── Display / headings ─── */
export const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-arabic-display",
  display: "swap",
});

/* ─── Friendly / body ─── */
export const lemonada = Lemonada({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-arabic-friendly",
  display: "swap",
});

/* ─── Alternative UI (similaire Cairo, startup vibe) ─── */
export const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-tajawal",
  display: "swap",
});

/* ─── Gulf / clean & modern ─── */
export const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic-almarai",
  display: "swap",
});

export const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-imperial",
  display: "swap",
});