import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex flex-col items-center gap-3">
        <div className="animate-colorSplits text-[220px] relative ">404
          <div className="absolute top-0 left-[-2px] z-10 overflow-visible text-[#333] glitches" style={{clipPath: "polygon(0% 0%, 100% 0, 100% 25%, 0 25%, 0 30%, 100% 30%, 100% 50%, 0 50%, 0 60%, 100% 60%, 100% 65%, 0 65%, 0 80%, 100% 80%, 100% 85%, 0 85%, 0% 0%)"}}>
            404
          </div>
        </div>
        <h2 className="text-lg font-semibold"> Page Not Found</h2>
        <Link
          href="/"
          className="bg-base-color px-8 py-3 rounded-md text-black font-semibold hover:bg-base-color-hover hover:scale-105 transition-all duration-150"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
