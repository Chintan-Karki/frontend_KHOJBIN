export function rankFinder(myArray, name) {
	// return myArray.find((x) => x.name === name).id;
	return myArray.findIndex((x) => x.name === name);
}

export const defaultRank = [
	{
		id: 4,
		name: "Hamrobazaar",
		chosen: false,
		selected: false,
	},
	{
		id: 1,
		name: "Daraz",
		chosen: false,
		selected: false,
	},
	{
		id: 3,
		name: "Ryzen",
		chosen: false,
		selected: false,
	},
	{
		id: 5,
		name: "Gyapu",
		chosen: false,
		selected: false,
	},
	{
		id: 2,
		name: "Sastodeal",
		chosen: false,
		selected: false,
	},
];
