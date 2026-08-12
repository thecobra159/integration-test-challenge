"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdvancedPage() {
  const [clickCount, setClickCount] = useState(0);
  const menuVisible = clickCount >= 3;

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Todo App
        </Link>

        <h1 className="text-3xl font-bold text-blue-600 mb-8">Advanced Demo</h1>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">
            Retry Click Demo
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Click the button 3 times to reveal the hidden menu.
          </p>

          <button
            data-testid="reveal-menu-button"
            onClick={() => setClickCount((c) => c + 1)}
            className="px-5 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors mb-4"
          >
            Click me ({clickCount}/3)
          </button>

          {menuVisible && (
            <nav
              data-testid="hidden-menu"
              className="p-4 bg-blue-50 border-2 border-blue-600 rounded-xl"
            >
              <p className="font-semibold text-blue-600 mb-2">
                Menu is now visible!
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Menu item 1</li>
                <li>Menu item 2</li>
                <li>Menu item 3</li>
              </ul>
            </nav>
          )}
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Users Table
          </h2>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table id="users" className="w-full text-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-800">John</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                      Admin
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-800">Mary</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      User
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
