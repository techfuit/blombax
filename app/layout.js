import { Poppins } from "next/font/google";
import "./globals.css";
import RenderStars from "@/components/Stars";
import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "@/hook/useContext";

const roboto = Poppins({ subsets: ["latin"], weight: ["100", "200" , "300" , "400", "500", "600", "700", "800", "900"] });
 
export const metadata = {
  title: "DFM Trade",
  description: "Trusted trading platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bgGradient bg-gray-950 relative`}>
        <Toaster position="top-right" />
        <RenderStars count={400} />
        <GlobalProvider>
          <div className="relative z-10">{children}</div>
        </GlobalProvider>
      </body>
    </html>
  );
}
