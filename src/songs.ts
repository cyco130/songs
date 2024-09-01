export interface Song {
	title: string;
	slug: string;
	key: string;
	chords: Section[];
}

export interface Section {
	name: string;
	lines: Line[];
}

export type Line = string[];

const rawSongs: Omit<Song, "slug">[] = [
	{
		title: "Ayrılık",
		key: "C minor",
		chords: [
			{
				name: "Verse",
				lines: [
					["Cm", "Fm", "Cm", "G"],
					["Fm7", "Fm", "G", "Cm"],
				],
			},
			{
				name: "Pre-Chorus",
				lines: [["Eb", "Fm", "Fm", "Cm | C"]],
			},
			{
				name: "Chorus",
				lines: [
					["Fm", "Fm", "Cm", "G"],
					["Eb", "Fm", "G", "Cm"],
				],
			},
		],
	},
	{
		title: "Çayeli",
		key: "D hijaz",
		chords: [
			{
				name: "Verse",
				lines: [["Gm", "D", "Cm", "D"]],
			},
		],
	},
	{
		title: "Dere Geliyor",
		key: "Dm",
		chords: [
			{
				name: "Verse",
				lines: [
					["Dm", "Dm", "Gm", "Dm"],
					["Bb", "C", "Cm", "Dm"],
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
				lines: [["Cm", "Cm", "Gm"]],
			},
			{
				name: "B (x2)",
				lines: [
					["Gm", "Gm", "Cm"],
					["Bbm", "Db", "Cm", "Cm"],
				],
			},
		],
	},
	{
		title: "Goca Dünya",
		key: "A hijaz",
		chords: [
			{
				name: "Intro and Chorus",
				lines: [["Gm", "A", "Gm", "A"]],
			},
			{
				name: "Chorus",
				lines: [
					["Gm", "Gm", "Gm", "A"],
					["Gm", "Gm", "Gm", "A"],
					["Dm", "Bb", "Gm | Bb", "A"],
					["Dm", "Bb", "Gm | Bb", "A"],
				],
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
				lines: [["A", "Bb", "Gm", "A"]],
			},
			{
				name: "Chorus",
				lines: [["Dm", "Bb", "Gm", "A"]],
			},
		],
	},
	{
		title: "Et Dodim",
		key: "C hijaz",
		chords: [
			{
				name: "A",
				lines: [["C", "Fm", "Bbm", "C"]],
			},
			{
				name: "B",
				lines: [["C", "Bbm", "Bbm", "C"]],
			},
		],
	},
	{
		title: "Las Palmas",
		key: "C phrygian",
		chords: [
			{
				name: "Verse",
				lines: [
					["Cm", "Cm", "Cm", "Fm"],
					["Cm", "Cm", "Bbm", "Cm"],
				],
			},
			{
				name: "Chorus",
				lines: [["Fm", "Eb", "Bbm", "Cm"]],
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
	{
		title: "Sevme Zamanı",
		key: "C hijaz",
		chords: [
			{
				name: "Al aşkım beni...",
				lines: [
					["Fm", "C", "Bbm", "C"],
					["Fm", "C", "Bbm", "C"],
					["Bbm", "C", "Bbm", "C"],
				],
			},
			{
				name: "Öyle günler var ki...",
				lines: [
					["Fm", "Eb", "Db", "Bbm | C"],
					["Fm", "Eb", "Db", "Bbm | C"],
					["C"],
				],
			},
			{
				name: "Biz dünyayı çok sevdik...",
				lines: [
					["Fm", "Fm", "Fm | Eb", "C"],
					["Fm", "Fm", "Fm | Eb", "C"],
				],
			},
			{
				name: "Hasretliği çektirme...",
				lines: [
					["Fm", "Eb", "Db", "Bbm | C"],
					["Fm", "Eb", "Db", "Bbm | C"],
					["C"],
				],
			},
		],
	},
	{
		title: "Süper Baba",
		key: "E minor",
		chords: [
			{
				name: "Intro",
				lines: [
					["Em", "D", "Bm", "Am"],
					["C", "B", "Em", "B7"],
				],
			},
			{
				name: "Verse",
				lines: [
					["Em", "C", "Am", "C"],
					["Am", "B7", "Em", "B7"],
					["Em", "C", "Am", "C"],
					["Am", "B7", "Em", "__"],
				],
			},
			{
				name: "Interlude",
				lines: [
					["Em", "D", "Bm", "Am"],
					["C", "D"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["G", "D", "Am", "C"],
					["G", "B7", "C", "D"],
					["G", "D", "Am", "C"],
					["G", "B7", "Em", "__"],
				],
			},
		],
	},
	{
		title: "Üsküdar",
		key: "Cm",
		chords: [],
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
];

export const songs: Song[] = rawSongs
	.map((song) => ({
		...song,
		slug: slugify(song.title),
	}))
	.sort((a, b) => a.title.localeCompare(b.title, "tr"));

function slugify(title: string) {
	return title
		.normalize("NFD")
		.replace(/ı/g, "i")
		.replace(/[^a-zA-Z0-9 ]/g, "")
		.toLowerCase()
		.replace(/ +/g, "-");
}
