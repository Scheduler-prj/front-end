import React, { lazy } from "react";

// namedLazy: named export 를 지원하는 lazy 함수
export function NamedLazy<T extends Record<string, React.ComponentType<any>>>(
    factory: () => Promise<T>,
    exportName: keyof T
) {
    return lazy(() =>
        factory().then((module) => ({
            default: module[exportName],
        }))
    );
}
