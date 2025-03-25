
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				amex: {
					blue: '#006FCF',
					gold: '#B2A06E',
					platinum: '#B0B2B5',
					green: '#4D8C57'
				},
				delta: {
					red: '#E31837',
					blue: '#003A70',
					light: '#9EABBC'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-in-down': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'progress': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'grow-x': {
					'0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
					'100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
				},
				'blur-in': {
					'0%': { filter: 'blur(12px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-out': 'fade-out 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'scale-out': 'scale-out 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-out-right': 'slide-out-right 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-up': 'slide-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-down': 'slide-in-down 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'progress': 'progress 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'grow-x': 'grow-x 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'blur-in': 'blur-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'enter': 'fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1), scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
				'exit': 'fade-out 0.5s cubic-bezier(0.16, 1, 0.3, 1), scale-out 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
			},
			fontFamily: {
				sans: ['Inter var', 'Inter', 'sans-serif'],
				display: ['SF Pro Display', 'Inter var', 'sans-serif'],
				mono: ['SF Mono', 'monospace']
			},
			transitionTimingFunction: {
				'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
			},
			boxShadow: {
				'glow': '0 0 20px rgba(0, 111, 207, 0.15)',
				'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
				'subtle': '0 2px 8px rgba(0, 0, 0, 0.06)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'glass': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
				'glass-dark': 'linear-gradient(to bottom right, rgba(20, 20, 20, 0.8), rgba(30, 30, 30, 0.6))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
