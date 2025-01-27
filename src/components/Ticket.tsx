"use client";

import useShareToInstagram from "@/hooks/useShareToInstagram";

export default function ShareToInstagram() {
	const { ticketRef, shareToInstagram } = useShareToInstagram();

	return (
		<div className="text-center p-5">
			{/* Ticket Component */}
			<div
				ref={ticketRef}
				className="aspect-[16/9]  p-5 text-white bg-black border border-gray-300 rounded-lg mx-auto flex flex-col justify-center items-center box-border"
			>
				<h2 className="text-2xl font-bold">Event Ticket</h2>
				<p className="text-base ">Event: My Awesome Concert</p>
				<p className="text-base ">Date: December 25, 2023</p>
				<p className="text-base ">Location: New York City</p>
				<p className="text-base ">Ticket ID: 123456</p>
			</div>

			{/* Share to Instagram Stories Button */}
			<button
				onClick={shareToInstagram}
				className=" px-5 py-2.5 bg-blue-600 text-white border-none rounded-lg cursor-pointer text-base hover:bg-blue-700"
			>
				Share to Stories
			</button>
		</div>
	);
}
