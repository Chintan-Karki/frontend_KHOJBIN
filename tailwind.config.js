module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			backgroundImage: {
				image: "url('/src/assets/bg.png')",
			},
		},
		backgroundSize: {
			"40%": "40%",
			"50%": "50%",
			"80%": "80%",
			"90%": "90%",
		},
	},
	plugins: [],
};
