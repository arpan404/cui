# CUI

Cross-platform React UI framework for building consistent web and native apps from a single component API.

> **Status:** 🚧 In active development (pre-release). APIs, file structure, and package contents may change.

## Why CUI

CUI aims to provide one component vocabulary that works across:

- Web (React + DOM)
- Native (React Native)

The project ships platform-specific implementations behind a unified API so product teams can move faster while preserving UI consistency.

## Current Scope

- Shared primitives, layout, hooks, icons, and rich component set
- Separate web/native entry points where platform behavior differs
- TypeScript-first build with generated declaration files
- Test setup for web components with Vitest + Testing Library

## Roadmap

Near-term priorities while CUI is in `0.x`:

- Stabilize the core API surface for `primitives`, `layout`, and high-usage `components`
- Improve type coverage and strictness across platform-specific component implementations
- Expand automated tests for cross-platform behavior and regression safety
- Publish clear installation guides for common setups (web-only, native-only, hybrid)
- Define first stable release criteria and versioning policy for `1.0`

## Component Support Matrix (Current)

Legend:

- ✅ Supported
- 🟡 Partial / evolving
- 🧪 Experimental

| Area | Web | Native | Notes |
| --- | --- | --- | --- |
| Core entry (`cui`) | ✅ | ✅ | Platform-specific entry points are exported |
| Primitives (`cui/primitives`) | ✅ | ✅ | Dedicated web/native index files |
| Layout (`cui/layout`) | ✅ | ✅ | Shared API with platform-specific internals |
| Components (`cui/components`) | ✅ | ✅ | Broad set available; parity may vary by component |
| Hooks (`cui/hooks`) | ✅ | ✅ | Platform-aware hook exports |
| Icons (`cui/icons`) | ✅ | ✅ | Uses web/native icon adapters |
| Theme (`cui/theme`) | ✅ | ✅ | Shared theme surface |
| Stylesheet export (`cui/styles.css`) | ✅ | N/A | Web-only CSS entry |

## Package Exports

The package currently exposes:

- `cui`
- `cui/primitives`
- `cui/layout`
- `cui/components`
- `cui/theme`
- `cui/icons`
- `cui/hooks`
- `cui/styles.css`

## Getting Started (Development)

### 1) Install dependencies

```bash
bun install
```

### 2) Build

```bash
bun run build
```

### 3) Watch mode

```bash
bun run dev
```

### 4) Type-check

```bash
bun run check-types
```

### 5) Run tests

```bash
bun run test
```

## Minimal Usage

```tsx
import { Button } from 'cui/components';

export function Example() {
  return <Button>Click me</Button>;
}
```

For web apps, include base styles once in your app entry:

```ts
import 'cui/styles.css';
```

## Project Structure

```text
src/
  components/      # Cross-platform UI components
  primitives/      # Base UI primitives
  layout/          # Layout utilities/components
  hooks/           # Reusable hooks
  icons/           # Platform-aware icon exports
  theme/           # Theme tokens/helpers
  __tests__/       # Web-focused component/primitives tests
```

## Tooling

- **Build:** `tsup` (ESM + CJS + d.ts)
- **Type-check:** `typescript`
- **Test:** `vitest` + `@testing-library/react` + `jsdom`

## Peer Dependencies

CUI keeps most UI ecosystem packages as peer dependencies so consumers can control versions.

Important peers include React/React Native and related UI primitives (Radix, Lucide, etc.). Install the subset required by the components you use.

## Contributing

1. Create a branch from `main`
2. Make focused changes
3. Run:
   - `bun run check-types`
   - `bun run test`
   - `bun run build`
4. Open a PR with a clear summary and usage impact

## Stability & Versioning

This project is currently `0.x` and may introduce breaking changes between minor releases while the API stabilizes.

## License

MIT LICENSE
