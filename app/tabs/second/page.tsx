import Link from "next/link";

export default function SecondTabPage() {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="bg-blue-50 border-2 border-blue-600 rounded-xl p-8 text-center">
          <h1
            data-testid="second-tab-heading"
            className="text-3xl font-bold text-blue-600 mb-3"
          >
            You are on the second tab!
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            This page was opened from the Tabs Demo page.
          </p>
          <Link href="/tabs" className="text-sm text-blue-600 hover:underline">
            ← Go back to Tabs Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
