/* eslint-disable ssr-friendly/no-dom-globals-in-react-fc */
import { Link } from "rakkasjs";
import { useState } from "react";
import { songs, type Song } from "src/songs";

export default function HomePage() {
	const [, forceUpdate] = useState({});

	return (
		<main className="p-4">
			<h1 className="pb-4 text-3xl">Songs</h1>
			<button
				type="button"
				className="mb-4 underline"
				onClick={() => {
					for (const key in localStorage) {
						if (key.startsWith("song/")) {
							localStorage.removeItem(key);
						}
					}
					forceUpdate({});
				}}
			>
				Uncheck all
			</button>
			<ul className="leading-8">
				{songs.map((song) => (
					<SongItem key={song.slug} song={song} />
				))}
			</ul>
		</main>
	);
}

function SongItem({ song }: { song: Song }) {
	const [, forceUpdate] = useState({});
	const checked = localStorage.getItem(`song/${song.slug}`) === "true";

	return (
		<li>
			<input
				type="checkbox"
				checked={checked}
				onChange={(e) => {
					if (e.target.checked) {
						localStorage.setItem(`song/${song.slug}`, "true");
					} else {
						localStorage.removeItem(`song/${song.slug}`);
					}
					forceUpdate({});
				}}
			/>{" "}
			<Link
				prefetch="eager"
				preload="eager"
				href={`/songs/${song.slug}`}
				className={checked ? "line-through" : "no-underline"}
			>
				{song.title} ({song.key})
			</Link>
		</li>
	);
}
