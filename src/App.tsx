function App() {
	let imgName = "/image-victor.jpg";
	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center background-images">
			<main className="flex flex-col m-auto items-center bg-white">
				<header>
					<img src={imgName} alt="" />
					<div className="flex flex-row">
						<h1>Victor Crest</h1> <span>26</span>
					</div>
					<h3>London</h3>
				</header>
				<footer className="flex flex-row">
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
