import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Oops! Something went wrong.
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error instanceof Error ? error.message : "An unexpected error occurred."}
          </p>
        </div>
        <div className="mt-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Error details</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <pre className="whitespace-pre-wrap break-words">
                {error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}
              </pre>
            </div>
            <div className="mt-5">
              <button
                type="button"
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Go back to homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};