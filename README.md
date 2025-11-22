# ReferenceX

A VS Code extension that shows inline CodeLens annotations displaying the number of references for TypeScript/JavaScript functions, methods, and classes.

## Features

- 📊 Shows reference count above each function/method/class definition
- 🔍 Clickable to view all references
- ⚡ Real-time updates as code changes
- 🎨 Gray styling for unused code (0 references)
- ⚙️ Configuration option to enable/disable

## Usage

Once installed, ReferenceX will automatically show reference counts above your TypeScript/JavaScript functions, methods, and classes:

```typescript
// 5 references
function myFunction() {
  // ...
}

// 0 references
class UnusedClass {
  // ...
}
```

Click on any reference count to see all references in the references panel.

## Configuration

- `referencex.enabled`: Enable/disable ReferenceX CodeLens (default: `true`)

## Requirements

- VS Code 1.85.0 or higher

## Development

1. Clone the repository
2. Run `npm install`
3. Run `npm run compile`
4. Press F5 to open a new VS Code window with the extension loaded

## License

MIT
