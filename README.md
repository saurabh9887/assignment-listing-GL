Activity Listing App

A cross-platform learning app built with Expo, React Native, and React Native Web, running from a single codebase on both web and mobile.

🚀 Tech Stack

Expo + React Native — unified mobile/web codebase

React Native Web — render native components on the browser

Expo Router — file-based navigation

Tailwind (NativeWind) — consistent and fast styling across platforms


📌 Features

Centralized activity list (Online Classes, Assignments, Quizzes, Discussions)

Each activity displays:

Type

Title

Status (Upcoming / Completed / In Progress)

Schedule / Due date

Obvious next action (Join Class / Start Quiz / Submit Assignment)

Mark activities as completed

Auto-update progress percentage

Responsive UI for both web and mobile

▶️ How to Run the Application Locally

1. Clone the repository

git clone assignment-listing-GL

2. Move into the project directory
   cd assignment-listing-GL

3. Install dependencies
   npm install

4. If you encounter dependency conflicts:
   npm install --legacy-peer-deps

5. Run on Web
   npm run web

6. Run on Android
a. Install Expo Go from the Play Store.

b. When you run npm run web, your terminal will display a QR code.

c. Open Expo Go → Scan that QR code → The app loads instantly on your phone.

🧠 Tech Choices & Tradeoffs

Expo

Why chosen:

1. Zero-config environment for mobile + web
2. Fast dev workflow
3. Reliable builds

Tradeoffs:

1. Slightly opinionated
2. A few native modules need additional configuration
3. Heavy dependency on the Expo ecosystem

React Native Web:
Why chosen:
1. True code reuse between mobile and web
2. Reduces UI duplication
3. Works well with Expo

Tradeoffs:
1. Complex layouts might need platform-specific adjustments

Expo Router
Why chosen:
1. File-based routing = fewer boilerplate screens
2. Cleaner project structure
3. Works on both mobile + web

Tradeoffs:
1. Requires a mental shift from React Navigation’s classic approach
2. Folder structure must stay organized, or routing becomes messy
   
Tailwind (NativeWind)
Why chosen:
1. Fast styling
2. Better consistency between web and mobile

Tradeoffs:
1. Classnames can get long
