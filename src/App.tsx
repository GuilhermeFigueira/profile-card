import { useState } from "react";

function App() {
	const [guilherme, setGuilherme] = useState(false);
	let imgName = [
		"/image-victor.jpg",
		"https://github.com/guilhermefigueira.png",
	];
	let name = ["Victor Crest", "Guilherme Figueira"];
	let age = ["26", "18"];
	let city = ["London", "São Paulo"];

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center background-images">
			<main className="flex flex-col m-auto items-center bg-white w-[22rem] h-[25rem] rounded-2xl shadow-2xl ">
				<header className="flex flex-col w-full h-full justify-end items-center gap-6 pb-10 [background-image:url(/bg-pattern-card.svg)] bg-no-repeat bg-contain rounded-t-2xl">
					<img
						src={guilherme ? imgName[0] : imgName[1]}
						alt=""
						className="rounded-full border-[6px] border-white h-[6.5rem] w-[6.5rem]"
					/>
					<div className="flex flex-col items-center">
						<div className="flex flex-row items-center gap-2 justify-center">
							<button onClick={() => setGuilherme(!guilherme)}>
								<h1 className="text-xl font-black text-blue-dark underline">
									{guilherme ? name[0] : name[1]}
								</h1>{" "}
							</button>
							<span className="text-[1.28rem] text-gray">
								{guilherme ? age[0] : age[1]}
							</span>
						</div>
						<h3 className="text-gray">
							{guilherme ? city[0] : city[1]}
						</h3>
					</div>
				</header>
				<footer className="flex flex-row justify-around w-full px-6 py-7 border-t-[1px] border-gray/60">
					<section>
						<h2>80K</h2>
						<span>Followers</span>
					</section>
					<section>
						<h2>803K </h2>
						<span>Likes</span>
					</section>
					<section>
						<h2>1.4K</h2>
						<span>Photos</span>
					</section>
				</footer>
			</main>
			<div className="text-center pt-4 ">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/guilhermefigueira"
					target="_blank"
					className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
				>
					Guilherme Figueira
				</a>
				.
			</div>
		</div>
	);
}

export default App;
