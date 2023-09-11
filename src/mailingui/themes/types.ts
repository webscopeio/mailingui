import * as React from "react";

// ⚠️ Proceed with caution

export type Colors<T extends string> = Record<T, React.CSSProperties["color"]>;

type StyleKey<T extends string> = keyof JSX.IntrinsicElements | T;

export type Styles<T extends string> = Partial<Record<StyleKey<T>, React.CSSProperties>>;
