import type { Song } from "src/songs";

const rawSongs: Omit<Song, "slug">[] = [
	{
		title: "Anlıyorsun Değil mi?",
		key: "C minor",
		chords: [
			{
				name: "Verse (x2)",
				lines: [
					["Cm", "Cm", "Cm", "Cm"],
					["Bb", "Bb", "Cm", "Cm"],
					["Bb", "Bb", "G", "G"],
					["Bb", "G", "Cm", "-"],
				],
			},
			{
				name: "Pre-Chorus",
				lines: [
					["Bb", "Bb", "A", "A"],
					["Bb", "Bb", "A", "A"],
					["Bb", "Bb", "A", "A"],
					["Bb", "A", "Cm", "-"],
				],
			},
			{
				name: "Chorus (x4)",
				lines: [
					["-", "G", "Fm", "G"],
					["-", "G", "G", "G"],
				],
			},
		],
	},
	{
		title: "Bambaşka Biri",
		key: "F# minor",
		chords: [
			{
				name: "Everything",
				lines: [
					["F#m", "Bm", "E", "A"],
					["D", "G#mb5", "C#", "C#"],
				],
			},
		],
	},
	{
		title: "Dünyadan Uzak",
		key: "E minor",
		chords: [
			{
				name: "Verse",
				lines: [
					["Em", "D", "Am", "Em"],
					["Em", "D", "Am", "Em"],
					["Am", "Am", "Am", "Am"],
					["D", "Em", "Em", "Em"],
					["Am", "Am", "Am", "Am"],
					["D", "Em", "Em", "Em"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["C", "C", "Bm", "Bm"],
					["C", "C", "Bm", "Bm"],
					["C", "C", "Bm", "Bm"],
					["Am", "Am", "D", "Em"],
				],
			},
		],
	},
	{
		title: "Dünya Dönüyor",
		key: "A hijaz",
		chords: [
			{
				name: "Verse",
				lines: [
					["A", "A", "A", "Dm"],
					["Dm", "Dm", "Bb", "A"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["A", "A", "Dm", "Dm"],
					["Gm", "Bb", "A | Bb", "A"],
				],
			},
		],
	},
	{
		title: "Düşünme Hiç",
		key: "E minor",
		chords: [
			{
				name: "Verse",
				lines: [
					["Em9", "Em9", "Am7", "Am7"],
					["Em9", "Em9", "Am7", "Am7"],
					["D", "Bsus | B", "Em", "Em"],
					["Am7", "B"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["Am7", "Am7", "Em9", "Em9"],
					["Am7", "Am7", "Em9", "Em9"],
				],
			},
		],
	},
	{
		title: "Fesuphanallah",
		key: "D phrygian",
		chords: [
			{
				name: "Verse",
				lines: [
					["Dm", "Dm", "Gm", "Dm"],
					["Dm", "Dm", "Gm", "Dm"],
					["Gm", "Cm", "Eb", "Dm"],
					["Gm", "Cm", "Eb", "Dm"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["F", "Cm", "Eb", "Dm"],
					["F", "Cm", "Eb", "Dm"],
					["Dm!", "Gm", "Cm", "Dm"],
					["Dm!", "Gm", "Cm", "Dm"],
				],
			},
			{
				name: "Melody",
				lines: [
					["Dm", "Dm", "Dm", "Gm"],
					["Cm", "Cm", "Cm", "Dm"],
				],
			},
		],
	},
	{
		title: "Gözlerinin Hapsindeyim",
		key: "B minor",
		chords: [
			{
				name: "Verse",
				lines: [
					["Bm", "Bm", "F#m", "F#m"],
					["Bm", "Bm", "F#m", "Bm"],
				],
			},
			{
				name: "Pre-Chorus",
				lines: [
					["D", "A", "F#m", "Bm"],
					["D", "A", "F#m", "Bm"],
					["Bm", "Bm", "F#m", "Bm"],
				],
			},
			{
				name: "Transition",
				lines: [["D", "D", "Bm | A", "G"]],
			},
			{
				name: "Chorus",
				lines: [
					["Em", "Bm", "G", "F#m"],
					["Em", "Bm", "G | F#", "Bm"],
				],
			},
		],
	},
	{
		title: "Haydi Gel Benimle Ol",
		key: "A hijaz",
		chords: [
			{
				name: "Verse",
				lines: [
					["A", "Bb", "Gm", "A"],
					["A", "Bb", "Gm", "A"],
				],
			},
			{
				name: "Pre-Chorus",
				lines: [
					["Bb", "Gm", "Bb", "A"],
					["Gm", "Bb", "Gm | Bb", "A | A7"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["Dm", "Am", "Gm", "A | A7"],
					["Dm", "Am", "Gm | Bb", "A"],
				],
			},
			{
				name: "Post-Chorus",
				lines: [
					["A", "Bb", "Gm", "A"],
					["A", "Bb", "Gm", "A"],
				],
			},
		],
	},
	{
		title: "Sevdam Ağlıyor",
		key: "G minor",
		chords: [
			{
				name: "Verse",
				lines: [
					["Dm", "Dm", "Dm", "Dm"],
					["Gm", "F", "Eb", "Dm"],
				],
			},
			{
				name: "Pre-Chorus (double time)",
				lines: [
					["F", "Gm", "F", "Gm"],
					["F", "Gm", "F", "Gm"],
					["F", "Gm", "F", "Bb"],
					["Cm", "F", "Eb", "Dm"],
					["D", "D", "D", "D"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["Gm", "Eb", "Cm", "F"],
					["F", "F", "Cm", "Dm"],
				],
			},
		],
	},
	{
		title: "Sevdan Olmasa",
		key: "C hijaz",
		chords: [
			{
				name: "Melody (x2)",
				lines: [
					["C", "C", "C", "C"],
					["Bbm", "Fm", "Db", "C"],
				],
			},
			{
				name: "Verse (x2)",
				lines: [["C", "Db", "Bbm", "C"]],
			},
			{
				name: "Pre-Chorus (x2)",
				lines: [["Bbm", "Fm", "Db", "Db", "Bbm", "C"]],
			},
			{
				name: "Chorus",
				lines: [
					["Fm", "C7", "Fm", "C7"],
					["Fm", "C7", "Fm", "C7"],
					["Bbm", "Bbm", "Db", "Bbm"],
					["C", "Bbm", "C", "C"],
				],
			},
		],
	},
	{
		title: "Yolcu Yolunda Gerek",
		key: "B hijaz",
		chords: [
			{
				name: "Verse",
				lines: [
					["B", "B", "C", "B"],
					["C", "B", "Em", "Em"],
					["Em", "Em", "Am", "B"],
					["C", "Am", "B", "B"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["B", "B", "Am", "B"],
					["Em", "Em", "Em", "Em"],
					["Em", "Em", "Am", "B"],
					["B", "B", "C", "C"],
					["Am", "Am", "B", "B"],
				],
			},
		],
	},
	{
		title: "Zalim",
		key: "B minor",
		chords: [
			{
				name: "Verse",
				lines: [
					["Bm", "Em", "F#m", "Bm"],
					["Bm", "Em", "F#m", "Bm"],
					["D", "Em", "A", "D"],
					["D", "Em", "A", "F#m"],
					["Bm", "Em", "F#m", "Bm"],
					["Bm", "Em", "F#m", "Bm"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["Bm", "Bm", "Bm", "Bm"],
					["Em", "F#m", "Bm", "A"],
					["Bm", "Bm", "Bm", "Bm"],
					["Em", "F#m", "Bm", "Bm!"],
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
