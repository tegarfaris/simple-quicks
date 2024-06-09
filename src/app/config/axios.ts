import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const AXIOS_INSTANCE_INBOX = axios.create({
  baseURL: process.env["NEXT_PUBLIC_BASE_URL_INBOX"],
});

const AXIOS_INSTANCE_TASK = axios.create({
  baseURL: process.env["NEXT_PUBLIC_BASE_URL_TASK"],
});

const devLogger = (message: string) => {
  if (process.env["NEXT_PUBLIC_ENV"] !== "true") {
    console.log(message);
  }
};

// Request INTERCEPTOR
const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { method, url } = config;
  devLogger(`[API] : ${method?.toUpperCase()} ${url} | Request`);
  return config;
};

// Response INTERCEPTOR
const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;
  devLogger(`[API] [${method?.toUpperCase()}]: ${url} | Response ${status}`);
  return response;
};

// Error Response INTERCEPTOR
const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as InternalAxiosRequestConfig;
    const { statusText, status } = (error.response as AxiosResponse) ?? {};
    devLogger(
      `[API] : ${method?.toUpperCase()} ${url} | Error ${status} ${message} ${statusText}`
    );
  } else {
    devLogger(`[API] | Error ${error.message}`);
  }
  return Promise.reject(error);
};

const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onErrorResponse);
  axiosInstance.interceptors.response.use(onResponse, onErrorResponse);
  return axiosInstance;
};

export const REQUEST_INBOX = setupInterceptors(AXIOS_INSTANCE_INBOX);
export const REQUEST_TASK = setupInterceptors(AXIOS_INSTANCE_TASK);
