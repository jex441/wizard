import Image from "next/image";

export default function Home() {
	// server action to handle form submission
	// wrong password, duplicate email, etc
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="flex flex-col items-center">
				<form className="flex flex-col gap-6 items-center">
					<input
						type="text"
						placeholder="Enter your email"
						className="border border-gray-300 rounded p-2 mb-4"
					/>
					<input
						type="password"
						placeholder="Enter your password"
						className="border border-gray-300 rounded p-2 mb-4"
					/>
					<div className="flex items-center gap-4 mb-4">
						<button className="bg-blue-500 text-white px-4 py-2 rounded">
							Login
						</button>
						<button className="bg-blue-500 text-white px-4 py-2 rounded">
							Create Account
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
