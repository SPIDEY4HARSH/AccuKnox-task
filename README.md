# Dynamic Dashboard with Widgets

A React + Material-UI dashboard where users can dynamically add, remove,
and manage widgets under multiple categories.\
Widgets are displayed in cards, and users can customize their dashboard
using a widget selection dialog.

------------------------------------------------------------------------

## Features

-   Category-wise widget display with predefined categories.\
-   Add and remove widgets dynamically.\
-   Each category ensures at least 3 cards (empty cards with an add
    button appear if fewer).\
-   Widget selection dialog with checkboxes for enabling/disabling
    widgets.\
-   Structured widget listing shown in rows of 3 items for readability.\
-   Responsive UI built with Material-UI.

------------------------------------------------------------------------

## Tech Stack

-   React (with Vite as bundler)\
-   Material-UI (MUI) for UI components\
-   React Hooks (`useState`, `useEffect`) for state management\
-   JSON for widget configuration

------------------------------------------------------------------------

## Project Structure

    src
     ┣ Components
     ┃ ┗ Dashboard.jsx
     ┣ App.jsx
     ┣ data.json
     ┣ main.jsx
     ┗ index.css

------------------------------------------------------------------------

## Installation & Setup

1.  Clone the repository:

    ``` bash
    git clone https://github.com/your-username/dashboard-project.git
    cd dashboard-project
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Start the development server:

    ``` bash
    npm run dev
    ```

4.  Open in browser:

        http://localhost:5173/

------------------------------------------------------------------------

## Data Format

The dashboard is driven by a JSON file defining categories and widgets.
Example:

``` json
{
  "dashboard": {
    "categories": [
      {
        "id": "cat1",
        "widgets": [
          { "id": "w1", "title": "Widget 1", "content": "Sample content 1" },
          { "id": "w2", "title": "Widget 2", "content": "Sample content 2" }
        ]
      }
    ]
  }
}
```

------------------------------------------------------------------------

## Future Enhancements

-   Save and persist dashboard layout in localStorage.\
-   Drag and drop widget reordering.\
-   Backend integration for fetching real-time widget data.

------------------------------------------------------------------------

## Author

Developed by Harsh Sharma
