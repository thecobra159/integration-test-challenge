import Link from "next/link";

export default function TabsPage() {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Todo App
        </Link>

        <h1 className="text-3xl font-bold text-blue-600 mb-4">Tabs Demo</h1>

        <p className="text-gray-500 text-sm mb-6">
          Click the link below — it opens in a new browser tab.
        </p>

        <a
          data-testid="open-new-tab"
          href="/tabs/second"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open page in new tab
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
