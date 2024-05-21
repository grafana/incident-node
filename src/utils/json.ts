import type { Schema, ZodTypeDef, ZodError } from 'zod';

export type JsonPrimitive = string | number | boolean | undefined;
export type Json = JsonPrimitive | JsonObject | JsonArray;
export type JsonObject = { [member: string]: Json } | {};
export interface JsonArray extends ReadonlyArray<Json> {}

/**
 * Decode json to a zod schema
 */
export async function decodeJson<T extends { error?: string | null }>(
  something: Json,
  schema: Schema<T, ZodTypeDef, Json>
): Promise<APIResponse<T>> {
  const result = await schema.safeParseAsync(something);
  if (result.success) {
    const { error } = result.data;
    if (error != null && error?.length > 0) {
      return {
        success: false,
        error: {
          status: 400,
          statusText: 'API error',
          message: error,
        },
      };
    }
  }

  return result;
}

export type APIResponse<T> =
  | {
      success: false;
      error: ZodError<Json> | { status: number; statusText: string; message: string };
    }
  | { success: true; data: Omit<T, 'error'> };
