"use client";
import { useRef } from "react";
import { toPng } from "html-to-image";

export default function useShareToInstagram() {
	const ticketRef = useRef(null);

	// Function to detect if the user is on iOS
	const isIOS = () => {
		return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
	};

	// Function to detect if the user is on Android
	const isAndroid = () => {
		return /Android/.test(navigator.userAgent);
	};

	// Function to generate a centered image for Instagram Stories
	const generateCenteredImage = async () => {
		if (ticketRef.current) {
			// Convert the ticket element to an image
			const dataUrl = await toPng(ticketRef.current);

			// Create a canvas to add padding and center the image
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");

			// Set canvas dimensions to 1080x1920 (Instagram Stories size)
			const targetWidth = 1080;
			const targetHeight = 1920;
			canvas.width = targetWidth;
			canvas.height = targetHeight;

			// Load the ticket image
			const img = new Image();
			img.src = dataUrl;

			// Wait for the image to load
			await new Promise((resolve) => {
				img.onload = resolve;
			});

			// Calculate the position to center the image
			const x = (targetWidth - img.width) / 2;
			const y = (targetHeight - img.height) / 2;

			if (!ctx?.drawImage) {
				return;
			}

			// Draw the image on the canvas (centered)
			ctx.drawImage(img, x, y);

			// Convert the canvas to a data URL
			return canvas.toDataURL("image/png");
		}
	};

	// Function to share the image to Instagram Stories
	const shareToInstagram = async () => {
		const centeredImage = await generateCenteredImage();
		if (centeredImage) {
			// Open Instagram Stories with the image
			const deepLink = `instagram-stories://share?backgroundImage=${encodeURIComponent(centeredImage)}`;
			window.location.href = deepLink;

			// Fallback: If Instagram is not installed, prompt the user to download it
			setTimeout(() => {
				if (!document.hidden) {
					if (isIOS()) {
						// Redirect to the App Store for iOS
						window.location.href = "https://apps.apple.com/app/instagram/id389801252";
					} else if (isAndroid()) {
						// Redirect to the Google Play Store for Android
						window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android";
					} else {
						// For other platforms, show a generic message
						alert("Instagram is not installed. Please download the app to share.");
					}
				}
			}, 500);
		}
	};

	return { ticketRef, shareToInstagram };
}
