function App() {
	let imgName = "/image-victor.jpg";
	let name = "Victor Crest";
	let age = "26";
	let city = "London";
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center background-images">
			<main className="flex flex-col m-auto items-center bg-white w-[22rem] h-[25rem] rounded-2xl shadow-2xl ">
				<header className="flex flex-col w-full h-full justify-end items-center gap-6 pb-10 [background-image:url(/bg-pattern-card.svg)] bg-no-repeat bg-contain rounded-t-2xl">
					<img
						src={imgName}
						alt=""
						className="rounded-full border-[6px] border-white"
					/>
					<div className="flex flex-col items-center">
						<div className="flex flex-row items-center gap-2 justify-center">
							<h1 className="text-xl font-black text-blue-dark">
								{name}
							</h1>{" "}
							<span className="text-[1.28rem] text-gray">
								{age}
							</span>
						</div>
						<h3 className="text-gray">{city}</h3>
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
