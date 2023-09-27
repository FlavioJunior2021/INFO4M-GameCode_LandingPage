/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			boxShadow: {
				custom: '-20px 14px 50px 0px #C1C8B6',
			},
			backgroundImage: {
				'hero-bg': "url('./src/assets/mobile.png')",
			}
		},
  },
  plugins: [],
}

