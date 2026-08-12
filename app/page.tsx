"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FilterType, Todo } from "./types/todo";

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((t) => !t.completed);
      case "completed":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = todos.filter((t) => !t.completed).length;

  function handleAddTodo() {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false },
    ]);
    setInputValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleAddTodo();
  }

  function handleToggle(id: number) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  function handleDelete(id: number) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function handleClearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Todo App
        </h1>

        <nav className="flex flex-wrap gap-2 mb-6 justify-center">
          {[
            { href: "/tabs", label: "Tabs Demo" },
            { href: "/links", label: "Links Demo" },
            { href: "/advanced", label: "Advanced Demo" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-600 rounded-md hover:bg-blue-100 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2 mb-6">
          <input
            data-testid="todo-input"
            type="text"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="New todo input"
            className="flex-1 px-4 py-2 text-base border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors"
          />
          <button
            data-testid="add-button"
            onClick={handleAddTodo}
            disabled={!inputValue.trim()}
            aria-label="Add todo"
            className="px-5 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Add
          </button>
        </div>

        <div className="flex gap-2 mb-4" role="group" aria-label="Filter todos">
          {(["all", "active", "completed"] as FilterType[]).map((f) => (
            <button
              key={f}
              data-testid={`filter-${f}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`flex-1 py-1.5 text-sm font-medium rounded-md border-2 transition-colors ${
                filter === f
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-gray-300 text-gray-600 bg-white hover:border-gray-400"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {filteredTodos.length === 0 ? (
          <p
            className="text-center text-gray-400 py-10 text-sm"
            data-testid="empty-state"
          >
            {filter === "completed"
              ? "No completed todos yet."
              : filter === "active"
                ? "No active todos. Great job!"
                : "No todos yet. Add one above!"}
          </p>
        ) : (
          <ul className="flex flex-col gap-2" data-testid="todo-list">
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                data-testid="todo-item"
                className={`flex items-center gap-3 px-4 py-3 bg-white border rounded-xl transition-opacity ${
                  todo.completed
                    ? "opacity-50 border-gray-200"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  aria-label={`Mark "${todo.text}" as ${todo.completed ? "active" : "completed"}`}
                  className="w-4 h-4 cursor-pointer accent-blue-600"
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`flex-1 text-base cursor-pointer ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </label>
                <button
                  data-testid="delete-button"
                  onClick={() => handleDelete(todo.id)}
                  aria-label={`Delete "${todo.text}"`}
                  className="text-red-400 hover:text-red-600 text-lg leading-none px-1 transition-transform hover:scale-110"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        {todos.length > 0 && (
          <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
            <span data-testid="active-count">
              {activeCount} {activeCount === 1 ? "item" : "items"} left
            </span>
            {todos.some((t) => t.completed) && (
              <button
                data-testid="clear-completed"
                onClick={handleClearCompleted}
                className="text-red-400 hover:text-red-600 underline transition-colors"
              >
                Clear completed
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
