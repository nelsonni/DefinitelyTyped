// Type definitions for hidefile v3.0.0
// Project: https://github.com/stevenvachon/hidefile
// Definitions by: Nicholas Nelson <https://github.com/nelsonni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'hidefile' {
    export function hide(
        path: string | Buffer | URL,
        callback: (error: Error | null, newpath?: string | Buffer | URL) => unknown
    ): void;

    export function hideSync(
        path: string | Buffer | URL
    ): string | Buffer | URL;

    export function isDotPrefixed(
        path: string | Buffer | URL
    ): boolean;

    export function isHidden(
        path: string | Buffer | URL,
        callback: (error: Error | null, result: boolean) => unknown
    ): void;

    export function isHiddenSync(
        path: string | Buffer | URL
    ): boolean;

    export function reveal(
        path: string | Buffer | URL,
        callback: (error: Error | null, newpath?: string | Buffer | URL) => unknown
    ): void;

    export function revealSync(
        path: string | Buffer | URL
    ): string | Buffer | URL;

    export function shouldBeHidden(
        path: string | Buffer | URL,
        callback: (error: Error | null, result: boolean) => unknown
    ): void;

    export function shouldBeHiddenSync(
        path: string | Buffer | URL
    ): boolean;
}
