import axios from 'axios';

export enum HttpCode {
  OK = 200,
  Created = 201,
  NoContent = 204,
}

export type HttpResult = {
  status: HttpCode;
  data: Record<string, unknown>;
};

export type CreatedResult = {
  id?: string;
  error?: string;
};

export type UpdatedResult = undefined | {
  error?: string;
};

export async function get(
  path: string,
  data?: Record<string, unknown>
): Promise<HttpResult> {
  return await axios.get(path, data);
}

export async function post(
  path: string,
  data?: Record<string, unknown>
): Promise<HttpResult> {
  return await axios.post(path, data, {
    validateStatus: (status: number): boolean => {
      return status < 500;
    },
  });
}

export async function put(
  path: string,
  data?: Record<string, unknown>
): Promise<HttpResult> {
  return await axios.put(path, data, {
    validateStatus: (status: number): boolean => {
      return status < 500;
    },
  });
}
