import { z } from 'zod';

export async function httpGet<T>(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = (await response.json()) as unknown;
  return data as T;
}

export async function httpGetZod<T>(url: string, zodSchema: z.ZodType<T>) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = (await response.json()) as unknown;
  try {
    return zodSchema.parse(data);
  } catch (error) {
    throw new Error('Invalid data !!');
  }
}
