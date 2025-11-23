# Changelog

All notable changes to the ReferenceX extension will be documented in this file.

## [0.2.1] - 2025-11-23

### Added
- Extension icon

## [0.2.0] - 2025-11-23

### Added
- Custom color configuration for each reference count range
- `onlyShowZeroReferences` setting to only highlight unused code
- Five customizable color settings: `colors.zero`, `colors.one`, `colors.few`, `colors.many`, `colors.lots`

### Changed
- Enhanced README with comprehensive documentation and examples
- Improved configuration options table

## [0.1.0] - 2025-11-23

### Added
- Initial release
- Inline reference count display at end of line
- CodeLens mode for displaying references above line
- Support for TypeScript, JavaScript, TSX, and JSX files
- Color-coded reference counts with emojis
- Configuration options:
  - Enable/disable extension
  - Show/hide zero references
  - Exclude test files
  - Toggle color decorations
  - Switch between inline and CodeLens display modes
- Detects functions, methods, classes, interfaces, and type aliases
- Clickable references to show all occurrences
- Real-time updates as code changes
