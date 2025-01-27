import useShareToInstagram from "@/hooks/useShareToInstagram";

export default function ShareToInstagram() {
	const { ticketRef, shareToInstagram } = useShareToInstagram();

	return (
		<div className="text-center p-5">
			{/* Ticket Component */}
			<div
				ref={ticketRef}
				className="w-[300px] h-[100px] p-5 bg-gray-100 border border-gray-300 rounded-lg mx-auto flex flex-col justify-center items-center box-border"
			>
				<h2 className="text-2xl font-bold mb-4">Event Ticket</h2>
				<p className="text-base mb-2">Event: My Awesome Concert</p>
				<p className="text-base mb-2">Date: December 25, 2023</p>
				<p className="text-base mb-2">Location: New York City</p>
				<p className="text-base mb-2">Ticket ID: 123456</p>
			</div>

			{/* Share to Instagram Stories Button */}
			<button
				onClick={shareToInstagram}
				className="mt-5 px-5 py-2.5 bg-blue-600 text-white border-none rounded-lg cursor-pointer text-base hover:bg-blue-700"
			>
				Share to Stories
			</button>
		</div>
	);
}
