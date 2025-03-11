import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const words = ["Supercharged Productivity.", "AI-Powered Insights."];

  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center">
          AI <span className="text-green-600 font-bold">note taking</span>{" "}
          Assistant
        </h1>
        <div className="mt-4"></div>
        <h2 className="font-semibold text-3xl text-center text-slate-700">
          <FlipWords words={words} /> <br />
        </h2>
        <div className="mt-8"></div>

        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button>
              Get Started <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
