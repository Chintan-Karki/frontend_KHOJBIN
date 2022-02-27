module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		screens: {
			xss: "360px",
			xs: "480px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1400px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			backgroundImage: {
				image: "url('/src/assets/images/bg.png')",
			},
		},
		backgroundSize: {
			"20%": "20%",
			"40%": "40%",
			"50%": "50%",
			"80%": "80%",
			"90%": "90%",
		},
	},
	plugins: [],
};
