import { Kind, SchemaOptions, TSchema, TypeRegistry } from "@sinclair/typebox";

TypeRegistry.Set<TStringEnum>(
    "StringEnum",
    (schema, value) => typeof value === "string" && schema.enum.includes(value),
);

export interface TStringEnum<T extends string[] = string[]> extends TSchema {
    [Kind]: "StringEnum";
    static: T[number];
    enum: T;
}

/** Creates a StringEnum type. Validates if value is one of specified strings. */
export function StringEnum<T extends string[]>(
    values: [...T],
    options?: SchemaOptions,
): TStringEnum<T> {
    return {
        ...options,
        [Kind]: "StringEnum",
        type: "string",
        enum: values,
    } as never;
    // INFO: returning as `never` 'cause that seems to be how TypeBox does things :)
}
