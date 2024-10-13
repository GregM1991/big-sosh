interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const BASE_URL = 'http://localhost:5000';

const apiClient = async <T>(url: string, options: FetchOptions = {}): Promise<T> => {
  const fullUrl = `${BASE_URL}${url}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers: defaultHeaders,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    return response.json() as Promise<T>;
  } catch (error) {
    // Customize error handling
    console.error('Fetch error:', error);
    throw error;
  }
};

export default apiClient;