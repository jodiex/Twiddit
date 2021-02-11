import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
	colors: {
        darkPurple: '#9DA1FF',
        darkerPurple: '#6371E8',
        lightPurple: '#EEEFF9',
        lightGray: '#E3E3E3',
	},
	fonts: {
		body: 'system-ui, sans-serif',
		heading: 'IBM Plex Serif, serif',
	},
	fontSizes: {
		xs: '12px',
		sm: '14px',
		md: '16px',
		lg: '18px',
		xl: '20px',
		'2xl': '24px',
		'3xl': '28px',
		'4xl': '36px',
		'5xl': '48px',
		'6xl': '64px',
    },
    textStyles: {
        h3: {
            fontSize: ["sm", "md"],
            fontWeight: "semibold",
            lineHeight: "110%",
        },
        h4: {
            fontSize: ["sm", "md"],
            fontWeight: "medium",
            lineHeight: "110%",
        },
        h5: {
            fontSize: ["sm", "md"],
            fontWeight: "normal",
            color: "gray",
        },
        h6: {
            fontSize: ["xs", "sm"],
            fontWeight: "normal",
            color: "gray",
        },
        h7: {
            fontSize: ["xs"],
            fontWeight: "medium"
        },
        h8: {
            fontSize: ["xs", "md"],
            fontWeight: "medium"
        }
    },
	fontWeights: {
		normal: 400,
		medium: 500,
        semibold: 700,
        bold: 900,
	},
	lineHeights: {
		normal: 'normal',
		none: '1',
		shorter: '1.25',
		short: '1.375',
		base: '1.5',
		tall: '1.625',
		taller: '2',
	},
	letterSpacings: {
		tighter: '-0.05em',
		tight: '-0.025em',
		normal: '0',
		wide: '0.025em',
		wider: '0.05em',
		widest: '0.1em',
    },
    styles: {
        global: (props) => ({
            body: {
                bg: 'lightPurple'
            },
        }),
    },
    components: {
        Button: {
            sizes: {
                '3xs': {
                    w: "7.25em",
                    h: "2.5em"
                },
            },
            baseStyle: {
                borderRadius: "xl",
            },
            variants: {
                "navButton": {
                    bg: "white",
                    color: "black",
                    _hover: { bg: "lightGray" },
                    size: "3xs",
                    textStyle: "h3"
                },
                "secondary": {
                    bg: "darkPurple",
                    color: "white",
                    _hover: { bg: "darkerPurple" }
                },
                "sidebarButton": {
                    bg: "white",
                    color: "black",
                    _hover: { bg: "lightGray" },
                    w: "2xs",
                    textStyle: "h4"
                },
                link: {
                    _hover: { color: "black" },
                    size: "md",
                }
            }
        },
    },
})

export default theme;