import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4 space-y-8 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
        Learn Anything, Anytime, Anywhere.
      </h1>
      <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400">
        FlashyCardyCourse is your ultimate platform for interactive learning.
        Create, share, and master flashcards on any topic.
      </p>
      <SignedIn>
        <Link href="/dashboard">
          <Button size="lg">
            Go to Dashboard
          </Button>
        </Link>
      </SignedIn>
      <Button size="lg">
        Start Learning Now
      </Button>
    </div>
  );
}
