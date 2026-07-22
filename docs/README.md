# CTR Progress

A lightweight browser-based overlay for tracking Crash Team Racing progress during practice and livestreams.

CTR Progress is designed to be used as a narrow side window in OBS, similar to the split layouts commonly seen in speedrun streams. It helps players track personal bests, goals, world records, and current grind performance in a compact visual format.

## Features

- Track personal bests, goals, and world records.
- Track current grind performance for the selected setup.
- Filter data by mode, track, restriction, and engine.
- Show a compact layout suitable for OBS browser sources.
- Store all progress locally in the browser using `localStorage`.
- Navigate easily through pages using keyboard shortcuts.
- View goal completion status on the `/goals-report` page.
- Customize your way on the `/settings` page.
- Compare player progress against current world records.

## How It Works

CTR Progress organizes data around four main selectors:

- **Mode**
- **Track**
- **Restriction**
- **Engine**

For each selected combination, the overlay can display:

- Personal best times
- Goal times
- Current world record times (the user must feed the tool with these)
- Current grind metrics

The project also includes a separate `/goals-report` page that shows progress bars for completed goals, making it easier to visualize overall improvement.

## Getting Started

### Requirements

You only need a modern browser to run the project.

### Run locally

If this project is fully static, you can open it directly in the browser or serve it with a simple local server.

#### Option 1: Open the HTML file directly

Open the main HTML file in your browser.

#### Option 2: Run a local server

Using Node.js:

```bash
npx serve .
```

Or using PHP:

```bash
php -S localhost:3000
```

Then open the local URL in your browser.

## Usage

### Main overlay

Use the main page as your practice or stream overlay.

Typical workflow:

1. Select the desired **mode**.
2. Select the **track**.
3. Select the **restriction**.
4. Select the **engine**.
5. Update your PBs, goals, WRs, and grind times directly in the interface.

### OBS setup

To use CTR Progress in OBS:

1. Add a new **Browser Source**.
2. Point it to the local or hosted project URL.
3. Set a narrow width so it behaves like a side panel.
4. Adjust height and position to match your stream layout.

This makes it work similarly to traditional speedrun split panels, but focused on CTR practice data.

## Goals Report Page

The `/goals-report` page provides a higher-level summary of progress.

It displays progress bars showing how many goals have already been achieved, which makes it useful for:

- Reviewing long-term progress
- Tracking category completion
- Showing milestone progress during streams

## Settings Page

The `/settings` page provides a few options for displaying.

It displays a few options for checking/unchecking that can hide or show features, such as:

- Background (can be transparent)
- Personal bests, goals, world records or grind metrics in the main page

## Data Persistence

All data is stored in the browser using `localStorage`.

This includes:

- Selected mode
- Selected track
- Selected restriction
- Selected engine
- Personal best times
- Goal times
- World record times
- Current grind data

Because the data is stored locally, progress will remain available in the same browser unless the browser storage is cleared.

## Use Cases

CTR Progress is useful for:

- Practice sessions
- Personal goal tracking
- OBS overlays for livestreams
- Comparing PBs against world records
- Monitoring current grind performance

## Roadmap

Possible future improvements:

- Import and export progress data
- Sync data between browsers
- Additional summary views
- More detailed grind history

## Author

Created by Natanael Nogueira.