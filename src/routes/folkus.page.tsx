/* eslint-disable ssr-friendly/no-dom-globals-in-react-fc */
import { Link } from "rakkasjs";
import { useState } from "react";
import type { Song } from "src/songs";

const rawSongs: Omit<Song, "slug">[] = [
	{
		title: "Ah Ya Zain",
		key: "D hijaz",
		chords: [
			{
				name: "All",
				lines: [
					["D", "D", "D", "D7"],
					["Gm", "Gm", "Cm", "D"],
					["Gm", "Gm", "Cm", "D"],
				],
			},
		],
	},
	{
		title: "Yedi Kule",
		key: "C hijaz",
		chords: [
			{
				name: "Intro",
				lines: [
					["C", "Fm", "Bbm", "C"],
					["Bbm", "C", "Bbm", "C"],
				],
			},
			{
				name: "Verse",
				lines: [
					["C", "C", "Fm", "C"],
					["C", "Fm", "Bbm", "C"],
				],
			},
			{
				name: "Chorus",
				lines: [["Bbm", "C", "Bbm", "C"]],
			},
		],
	},
	{
		title: "Güneşim",
		key: "A hijaz",
		chords: [
			{
				name: "Intro (double time)",
				lines: [["A", "Bb", "Gm", "A"]],
			},
			{
				name: "Verse",
				lines: [["A", "Bb", "Gm | Bb", "A"]],
			},
			{
				name: "Chorus",
				lines: [["Dm", "Bb", "Gm | Bb", "A"]],
			},
		],
	},
	{
		title: "Hop Hop",
		originalTitle: "Beyoğlu'nda Gezersin",
		key: "G",
		chords: [
			{
				name: "Intro A",
				lines: [
					["G", "G", "G", "G"],
					["G", "G", "D", "G"],
				],
			},
			{
				name: "Intro B - (like Chorus)",
				lines: [
					["C", "C", "G", "G"],
					["D", "D", "G", "G"],
				],
			},
			{
				name: "Verse",
				lines: [
					["G", "G", "G", "G"],
					["C", "C", "D", "D"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["C", "C", "G", "G"],
					["D", "D", "G", "G"],
				],
			},
		],
	},
	{
		title: "Bazalika",
		key: "A phrygian",
		chords: [
			{
				name: "A",
				lines: [["(NC)"]],
			},
			{
				name: "B",
				lines: [
					["F", "C", "F", "C"],
					["Gm", "Dm", "C", "Bb"],
					["C", "Bb", "Am", "Am"],
					["Am", "Am"],
				],
			},
		],
	},
	{
		title: "Telgrafın Telleri",
		key: "E minor",
		chords: [
			{
				name: "Intro",
				lines: [["Em", "Em", "Em", "Em!"]],
			},
			{
				name: "Verse / Chorus",
				lines: [
					["Am", "Em", "D", "Am"],
					["Am", "Em", "D", "Em"],
				],
			},
		],
	},
	{
		title: "Gesi Bağları",
		key: "C phrygian",
		chords: [
			{
				name: "A",
				lines: [["Cm", "Cm", "Fm"]],
			},
			{
				name: "B (x2)",
				lines: [
					["Fm", "Fm", "Cm"],
					["Bbm", "Db", "Cm", "Cm"],
				],
			},
		],
	},
	{
		title: "Misirlou",
		key: "C hijaz",
		chords: [
			{
				name: "Verse",
				lines: [
					["C", "C", "C", "C"],
					["C", "C", "C", "C"],
					["Fm", "Fm", "C", "C"],
					["Bbm", "Bbm", "C", "C"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["Fm", "Fm", "Eb", "Eb"],
					["Db", "Db7", "C", "C"],
					["Bbm", "Bbm", "C", "C"],
					["Bbm", "Bbm", "C", "C"],
				],
			},
		],
	},
	{
		title: "Nar Çiçeği",
		key: "C hijaz",
		chords: [
			{
				name: "Chorus",
				lines: [["Fm", "Fm", "Bbm", "C"]],
			},
			{
				name: "Verse",
				lines: [["Eb", "Db", "Bbm", "C"]],
			},
		],
	},
	{
		title: "Çemberimde Gül Oya",
		key: "A - phrygian on C#",
		chords: [
			{
				name: "Verse (x2)",
				lines: [["A", "A", "F#m", "E", "A", "A"]],
			},
			{
				name: "Chorus (x2)",
				lines: [
					["A", "F#m", "E", "E"],
					["D", "E", "A", "A"],
				],
			},
		],
	},
	{
		title: "Kasap Havası",
		key: "D hijaz",
		chords: [
			{
				name: "A",
				lines: [
					["D", "Gm", "D", "D"],
					["Cm", "Cm", "D", "D"],
				],
			},
			{
				name: "B",
				lines: [
					["D", "D", "D", "D"],
					["Cm", "Cm", "Bb", "D", "Gm", "D"],
				],
			},
		],
	},
	{
		title: "Rampi Rampi",
		key: "D hijaz",
		chords: [
			{
				name: "Intro (double time)",
				lines: [["Gm", "D", "Cm", "D"]],
			},
			{
				name: "Verse",
				lines: [
					["Gm", "D", "Gm", "D"],
					["Cm", "D", "Cm", "D"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["Cm", "Cm", "Cm", "Cm"],
					["Cm", "Cm", "D", "D"],
				],
			},
		],
	},
];

export const songs: Song[] = rawSongs.map((song) => ({
	...song,
	slug: slugify(song.title),
}));

function slugify(title: string) {
	return title
		.normalize("NFD")
		.replace(/ı/g, "i")
		.replace(/[^a-zA-Z0-9 ]/g, "")
		.toLowerCase()
		.replace(/ +/g, "-");
}

export default function FolkusPage() {
	const [, forceUpdate] = useState({});

	return (
		<main className="p-4">
			<h1 className="pb-4 text-3xl">Folkus Setlist</h1>
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
				href={`/songs/${song.slug}?back=folkus`}
				className={checked ? "line-through" : "no-underline"}
			>
				{song.title} ({song.key})
			</Link>
		</li>
	);
}
