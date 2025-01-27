import Image from "next/image";
import ShareToInstagram from "@/components/Ticket";
export default function Home() {
	return (
		<div className="w-full bg-black mx-auto flex h-screen justify-center items-center">
			<main className="">
				<ShareToInstagram />
			</main>
		</div>
	);
}
