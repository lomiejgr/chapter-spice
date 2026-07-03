import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { spice:'#8f2944', ink:'#2a171b', cream:'#fff7f2', blush:'#f4ddd6' }, boxShadow:{soft:'0 18px 60px rgba(80,32,42,.14)'} } }, plugins: [] }
export default config
