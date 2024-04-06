import { useState } from "react";
import { useEffect } from "react";
import { ContainerWrapper } from "./container-wrapper";
import { HeartButton } from "./heart-button";

import Aos from "aos";
import "aos/dist/aos.css";

export function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("/src/api/posts.json")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Ocorreu um erro 😢");
				}
				return res.json();
			})
			.then((data) => setPosts(data))
			.catch((error) => console.log("Erro ao consumir API.", error));
	});

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<ContainerWrapper className="flex flex-col gap-[40px] my-10">
			{posts.map((post, i) => (
				<div
					className="flex flex-col gap-[20px] p-[40px] rounded-lg border-2 border-dark-40 bg-dark-20 hover:border-orange"
					data-aos="fade-up"
					key={i}>
					<div className="text-orange text-base font-medium font-inter flex flex-row items-center justify-between">
						<span>{post.date}</span>
						<HeartButton />
					</div>

					<a
						href="/"
						className="font-spaceGrotesk text-2xl font-medium text-white hover:text-white/80">
						{post.title}
					</a>
					<p className="font-inter text-lg font-medium text-gray">
						{post.subcontent}
					</p>
				</div>
			))}
		</ContainerWrapper>
	);
}
