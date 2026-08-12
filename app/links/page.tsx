import Link from "next/link";

// Page used by the "broken links" test scenario.
// Mixes valid internal links with intentionally broken ones.
export default function LinksPage() {
  const validLinks = [
    { href: "/", label: "Home (valid)", testId: "link-home" },
    { href: "/tabs", label: "Tabs Demo (valid)", testId: "link-tabs" },
    {
      href: "/advanced",
      label: "Advanced Demo (valid)",
      testId: "link-advanced",
    },
  ];

  const brokenLinks = [
    {
      href: "/this-page-does-not-exist",
      label: "Broken link 1",
      testId: "link-broken-1",
    },
    {
      href: "/another-missing-page",
      label: "Broken link 2",
      testId: "link-broken-2",
    },
  ];

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Todo App
        </Link>

        <h1 className="text-3xl font-bold text-blue-600 mb-6">Links Demo</h1>

        <section className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Valid Links
          </h2>
          <ul data-testid="link-list" className="flex flex-col gap-2">
            {validLinks.map(({ href, label, testId }) => (
              <li key={href}>
                <a
                  href={href}
                  data-testid={testId}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors text-sm font-medium"
                >
                  <span className="text-green-500">✓</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Broken Links (intentional — for testing)
          </h2>
          <ul className="flex flex-col gap-2">
            {brokenLinks.map(({ href, label, testId }) => (
              <li key={href}>
                <a
                  href={href}
                  data-testid={testId}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-red-500 hover:bg-red-50 hover:border-red-300 transition-colors text-sm font-medium"
                >
                  <span>✕</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
