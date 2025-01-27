# Share to Instagram Stories from a Next.js App

## This project demonstrates how to share a ticket (or any content) from a Next.js app to Instagram Stories. It uses deep linking to open Instagram and pre-fill the Stories editor with a centered image of the ticket. The solution supports both iOS and Android devices.

Features
Dynamic Image Generation:

Converts a ticket component into an image.

Centers the image within a 1080x1920 canvas (Instagram Stories size).

Cross-Platform Support:

Works on both iOS and Android.

Redirects users to the appropriate app store if Instagram is not installed.

Simple Integration:

Uses a custom React hook (useShareToInstagram) for logic.

Inline styles for easy customization.

Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-username/nextjs-instagram-stories.git
cd nextjs-instagram-stories
Install dependencies:

bash
Copy
npm install
# or
yarn install
Run the development server:

bash
Copy
npm run dev
# or
yarn dev
Open the app:
Visit http://localhost:3000 in your browser.

How It Works
1. Ticket Component
The ticket is a simple div with event details. It is styled to fit within a 300x533 pixel container (maintaining a 9:16 aspect ratio).

2. Image Generation
When the user clicks the "Share to Stories" button:

The ticket component is converted into an image using the html-to-image library.

The image is centered within a 1080x1920 canvas to fit Instagram Stories.

3. Sharing to Instagram
The app constructs a deep link (instagram-stories://) and opens it.

If Instagram is not installed, the user is redirected to the App Store (iOS) or Google Play Store (Android).