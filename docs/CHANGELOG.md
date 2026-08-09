# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.2] - 2026-08-09

### Added

- Added the `/export` page with support for exporting data to `.csv` and `.xlsx`.
- Added the `/import` page with support for importing data from `.csv` files.
- Added an option to erase all stored data on the `/settings` page.

### Fixed

- Other engines can now be selected for Skipless and Classic modes.

## [0.1.1] - 2026-07-22

### Added

- Added proper text alignment.
- Added the `/settings` page with options for enabling or disabling the transparent background and metrics.
- Added keyboard shortcuts for navigating between pages.

### Changed

- Renamed the `/goal-progress` page to `/goals-report`.
- Cleaned up and refactored the codebase.

### Fixed

- Fixed invalid restriction and engine selections when changing modes or tracks on the main page.

## [0.1.0] - 2026-07-20

### Added

- Initial release of **CTR Progress**.
- Added a browser-based overlay designed for use as a narrow side panel in OBS.
- Added support for tracking personal bests, goals, and world records.
- Added support for tracking current grind metrics for the selected setup.
- Added selection flow based on mode, track, restriction, and engine.
- Added persistent local data storage using browser `localStorage`.
- Added the `/goals-report` page with progress bars showing completed goals.
- Added a compact UI intended for speedrun practice and livestream layouts.