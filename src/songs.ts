export interface Song {
	title: string;
	originalTitle?: string;
	link?: string;
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
		title: "Ah Ya Zain",
		key: "C hijaz",
		chords: [
			{
				name: "All",
				lines: [
					["C", "C", "C", "C7"],
					["Fm", "Fm", "Bbm", "C"],
					["Fm", "Fm", "Bbm", "C"],
				],
			},
		],
	},
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
		title: "Chichovoto Horo",
		key: "D",
		originalTitle: "Chichovoto Horo",
		link: "https://www.youtube.com/watch?v=KqgnvL80Zyg",
		chords: [
			{
				name: "A (x2)",
				lines: [
					["D", "D", "D", "D"],
					["D", "D", "D", "D"],
					["D", "A", "D", "A"],
					["D", "A", "D", "A"],
				],
			},
			{
				name: "B (x2)",
				lines: [["D", "D", "D", "D"]],
			},
			{
				name: "C (x2)",
				lines: [
					["G", "G", "G!", "G"],
					["G", "G", "G!", "G"],
					["C", "D", "C", "D"],
					["C", "D", "C", "D"],
				],
			},
			{
				name: "D (x2)",
				lines: [["G", "G", "G", "G"]],
			},
		],
	},
	{
		title: "Crosswinds",
		key: "Dm",
		chords: [
			{
				name: "A (x2)",
				lines: [
					["Dm", "C", "Bb", "C"],
					["Dm", "C", "Bb", "Am"],
				],
			},
			{
				name: "B (x4)",
				lines: [["Gm", "Gm", "Bb", "Bb"]],
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
		title: "Çemberimde Gül Oya",
		key: "G - phrygian on B",
		chords: [
			{
				name: "Verse (x2)",
				lines: [["G", "G", "Em", "D", "G", "G"]],
			},
			{
				name: "Chorus (x2)",
				lines: [
					["G", "Em", "D", "D"],
					["C", "D", "G", "G"],
				],
			},
		],
	},
	{
		title: "Darbashiya",
		link: "https://www.youtube.com/watch?v=RGFFSekIq0I",
		key: "Dm",
		chords: [
			{
				name: "A (x8)",
				lines: [["Dm", "Dm", "C", "Dm"]],
			},
			{
				name: "B (x4)",
				lines: [
					["Dm", "Gm", "C", "F"],
					["Bb", "Gm", "Am", "Dm"],
				],
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
		title: "Entarisi Ala Benziyor",
		key: "D hijaz",
		chords: [
			{
				name: "Intro/Chorus",
				lines: [["Gm", "D", "Cm", "D"]],
			},
			{
				name: "Verse (2x each)",
				lines: [
					["Gm", "Gm", "Cm", "D"],
					["Gm", "Cm", "Eb", "D"],
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
				lines: [["A", "Bb", "Gm | Bb", "A"]],
			},
			{
				name: "Chorus",
				lines: [["Dm", "Bb", "Gm | Bb", "A"]],
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
	// {
	// 	title: "Kojak Cocek",
	// 	key: "",
	// },
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
		// Bughicis freylakhs
		title: "Merlin",
		key: "D hijaz",
		chords: [
			{
				name: "A (x2)",
				lines: [["D", "D", "Cm", "D"]],
			},
			{
				name: "B (x2)",
				lines: [["D", "D", "Cm", "D"]],
			},
			{
				name: "C (x2)",
				lines: [["G", "G", "D", "G"]],
			},
			{
				name: "D",
				lines: [
					["D", "Cm", "D", "Gm"],
					["D", "Cm", "D", "D"],
					["D", "Cm", "D", "Gm"],
					["D", "D", "D", "D"],
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
		title: "One Night in Paradise",
		originalTitle: "A Nakht In Gan Eydn",
		link: "https://www.youtube.com/watch?v=FCBbgAKK1XY",
		key: "G minor",
		chords: [
			{
				name: "A (x2)",
				lines: [
					["Gm", "Gm", "Gm", "Gm"],
					["Bb", "Bb", "Bb", "Bb"],
					["Bb", "Bb", "Cm", "Gm"],
					["Gm", "D7", "Gm | D7", "Gm"],
				],
			},
			{
				name: "B (x2)",
				lines: [
					["Gm", "Gm | G", "G", "Cm"],
					["Cm", "Cm", "D7", "D7"],
					["Bb", "Bb", "Cm", "Cm"],
					["Gm", "D7", "Gm", "Gm"],
				],
			},
			{
				name: "C (x2) rhythm!",
				lines: [
					["Gm", "Gm", "Gm", "G"],
					["Bb", "Bb", "Cm", "Cm"],
					["Gm", "D7", "Gm", "Gm"],
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
	{
		title: "Sevemem",
		key: "A hijaz",
		chords: [
			{
				name: "A (Melody/Chorus/Intro) (x2)",
				lines: [["A", "A", "Gm", "A"]],
			},
			{
				name: "B (End of Verses) (x2)",
				lines: [["Dm", "A", "Bb", "A"]],
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
				lines: [["Fm", "Eb", "Db", "C"], ["Fm", "Eb", "Db", "C"], ["C"]],
			},
		],
	},
	{
		title: "Sugar in the Blood",
		key: "B hijaz",
		chords: [
			{
				name: "Riff/Verse",
				lines: [["B", "B", "Am", "B"]],
			},
			{
				name: "Chorus",
				lines: [["Am", "Em", "Am", "B"]],
			},
			{
				name: "Post-chorus",
				lines: [["B", "B", "Cb", "Cb"], ["Am"]],
			},
			{
				name: "Interlude",
				lines: [
					["Em", "Em", "G", "G"],
					["Am", "Am", "C", "C"],
					["Em", "D", "C", "B"],
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
		title: "Telgrafın Telleri",
		key: "D minor",
		chords: [
			{
				name: "Verse / Chorus",
				lines: [
					["Gm", "Dm", "C", "Gm"],
					["Gm", "Dm", "C", "Dm"],
				],
			},
		],
	},
	{
		title: "Telli Turna",
		key: "G phrygian",
		chords: [
			{
				name: "Intro",
				lines: [
					["Gm", "Gm", "Gm", "Gm"],
					["Cm", "Cm", "Bb", "Fm"],
				],
			},
			{
				name: "Verse",
				lines: [
					["Gm", "Gm", "Gm", "Cm"],
					["Fm", "Fm", "Bb | Fm", "Gm"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["Gm", "Gm", "Cm", "Cm"],
					["Bb", "Fm", "Gm", "Gm"],
				],
			},
		],
	},
	{
		title: "Thermastis",
		key: "Fm",
		link: "https://www.youtube.com/watch?v=JVCJXss_XiY",
		chords: [
			{
				name: "A (x16)",
				lines: [["Fm", "Fm", "Fm", "Fm"]],
			},
			{
				name: "A (x16)",
				lines: [["Fm", "G", "C", "Fm"]],
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
	{
		title: "What You Gonna Do",
		key: "G hijaz",
		chords: [
			{
				name: "Intro / Verse",
				lines: [
					["G", "G", "G", "G"],
					["G", "G", "Fm", "G"],
				],
			},
			{
				name: "Chorus",
				lines: [
					["Cm", "Ab", "G", "G"],
					["Cm", "Ab", "G", "G"],
				],
			},
			{
				name: "Bridge",
				lines: [
					["Cm", "Ab", "Fm", "G"],
					["Cm", "Ab", "Fm", "(NC)"],
				],
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
