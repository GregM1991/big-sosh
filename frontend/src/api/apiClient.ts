interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

interface ServiceApiClientOptions {
  basePath: string;
  baseHost: string;
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

function createServiceApiClient({
  basePath,
  baseHost
}: ServiceApiClientOptions) {
  const fullBasePath = `http://localhost:${baseHost}/api${basePath}`;

  const serviceApiClient = async <TResponse, TBody = undefined>(
    path: string,
    method: HttpMethod,
    body?: TBody,
    options: Omit<FetchOptions, "method" | "body"> = {}
  ): Promise<TResponse> => {
    const fullUrl = `${fullBasePath}${path}`;
    const defaultHeaders = {
      "Content-Type": "application/json",
      ...options.headers
    };

    try {
      const response = await fetch(fullUrl, {
        ...options,
        method,
        headers: defaultHeaders,
        body: body ? JSON.stringify(body) : undefined
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      return response.json() as Promise<TResponse>;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  return {
    get: <TResponse>(path: string, options?: Omit<FetchOptions, "method">) =>
      serviceApiClient<TResponse, undefined>(path, "GET", undefined, options),

    post: <TResponse, TBody>(
      path: string,
      body: TBody,
      options?: Omit<FetchOptions, "method" | "body">
    ) => serviceApiClient<TResponse, TBody>(path, "POST", body, options),

    put: <TResponse, TBody>(
      path: string,
      body: TBody,
      options?: Omit<FetchOptions, "method" | "body">
    ) => serviceApiClient<TResponse, TBody>(path, "PUT", body, options),

    delete: <TResponse>(path: string, options?: Omit<FetchOptions, "method">) =>
      serviceApiClient<TResponse, undefined>(
        path,
        "DELETE",
        undefined,
        options
      ),

    patch: <TResponse, TBody>(
      path: string,
      body: TBody,
      options?: Omit<FetchOptions, "method" | "body">
    ) => serviceApiClient<TResponse, TBody>(path, "PATCH", body, options)
  };
}

export default createServiceApiClient;
