import { Head, Link, ResponseHeaders, type Page } from "rakkasjs";
import { Fragment } from "react/jsx-runtime";
import { songs } from "src/songs";

const SongPage: Page<{ slug: string }> = ({ params: { slug } }) => {
	const song = songs.find((song) => song.slug === slug);

	if (!song) {
		return (
			<main className="prose p-4">
				<Head title="Song not found - Songs" />
				<ResponseHeaders status={404} />
				<h1>Song not found</h1>
				<p className="mt-8">
					<Link className="underline" href="/">
						Back to songs
					</Link>
				</p>
			</main>
		);
	}

	const maxLineLength = Math.max(
		...song.chords.flatMap((section) =>
			section.lines.map((line) => line.length),
		),
	);

	return (
		<main className="p-4">
			<Head title={`${song.title} - Songs`} />
			<h1 className="pb-4 text-3xl">
				{song.title}
				<br />
				<small>({song.key})</small>
			</h1>

			<table className="m-0 w-full max-w-lg table-fixed">
				<tbody>
					{song.chords.map((section, i) => (
						<Fragment key={i}>
							<tr className="border-0">
								<th
									className={"text-left " + (i ? "pt-2" : "")}
									colSpan={maxLineLength}
								>
									{section.name}
								</th>
							</tr>
							{section.lines.map((line, i) => (
								<tr key={i} className="border-0">
									{line.map((chord, i) => (
										<td className="border border-gray-300 p-2 text-sm" key={i}>
											{chord}
										</td>
									))}
									{line.length < maxLineLength && (
										<td
											className="p-2"
											colSpan={maxLineLength - line.length}
										></td>
									)}
								</tr>
							))}
						</Fragment>
					))}
				</tbody>
			</table>

			<p className="mt-8">
				<Link className="underline" href="/">
					Back to songs
				</Link>
			</p>
		</main>
	);
};

export default SongPage;
