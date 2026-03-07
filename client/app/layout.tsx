// filepath: /Users/andrijostapchuk/Documents/projects/my-music-web-soft/client/app/layout.tsx
import { Outlet, useRouteError, isRouteErrorResponse } from "react-router";
import Dashboard from "./shared/components/Dashboard/Dashboard";

export function ErrorBoundary() {
  const error = useRouteError();
  let title = "Something went wrong";
  let message = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "Page not found" : `Error ${error.status}`;
    message =
      error.status === 404
        ? "We couldn't find what you were looking for."
        : error.statusText || message;
  } else if (import.meta.env.DEV && error instanceof Error) {
    message = error.message;
    stack = error.stack;
  }

  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-6 bg-neutral-800 text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="mb-4">{message}</p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded mr-2"
          >
            Go Back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
          >
            Reload
          </button>
          {stack && import.meta.env.DEV && (
            <pre className="mt-4 p-2 bg-gray-700 rounded text-xs overflow-x-auto">
              <code>{stack}</code>
            </pre>
          )}
        </div>
      </main>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
