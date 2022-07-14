import {
	LinkedInIcon,
	GitHubIcon,
	TwitterIcon,
	EmailIcon,
	PhoneIcon,
} from "../imports"
import YouTubeIcon from "@material-ui/icons/YouTube"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faAngular,
	faAws,
	faCss3,
	faDev,
	faHtml5,
	faNode,
	faReact,
} from "@fortawesome/free-brands-svg-icons"

export const links = {
	linkedin: {
		href: "https://www.linkedin.com/in/adarshg1/",
		icon: <LinkedInIcon style={{ fontSize: 80 }} />,
	},
	twitter: {
		href: "https://twitter.com/_Adarsh_Goyal_",
		icon: <TwitterIcon style={{ fontSize: 80 }} />,
	},
	github: {
		href: "https://github.com/Adarshg315",
		icon: <GitHubIcon style={{ fontSize: 80 }} />,
	},
	email: {
		href: "mailto:adarshg315@gmail.com",
		icon: <EmailIcon style={{ fontSize: 80 }} />,
	},
	dev: {
		href: "https://dev.to/adarshgoyal",
		icon: <FontAwesomeIcon icon={faDev} style={{ fontSize: 80 }} />,
	},
	youtube: {
		href: "https://www.youtube.com/channel/UCkEMeT43qAO3pElG2EzOS6w",
		icon: <YouTubeIcon style={{ fontSize: 80 }} />,
	},
	phone: {
		href: "tel:+9178287064354",
		icon: <PhoneIcon style={{ fontSize: 80 }} />,
	},
}

export const techUsed = {
	Node: {
		href: "/",
		icon: <FontAwesomeIcon icon={faNode} style={{ fontSize: 50 }} />,
	},
	// MongoDB: {
	// 	href: "/",
	// 	icon: <FontAwesomeIcon icon={faNode} style={{ fontSize: 50 }} />,
	// },
	// Postgress: {
	// 	href: "/",
	// 	icon: <FontAwesomeIcon icon={faDev} style={{ fontSize: 50 }} />,
	// },
	AWS: {
		href: "/",
		icon: <FontAwesomeIcon icon={faAws} style={{ fontSize: 50 }} />,
	},
	React: {
		href: "/",
		icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: 50 }} />,
	},
	Angular: {
		href: "/",
		icon: <FontAwesomeIcon icon={faAngular} style={{ fontSize: 50 }} />,
	},
	HMTL: {
		href: "/",
		icon: <FontAwesomeIcon icon={faHtml5} style={{ fontSize: 50 }} />,
	},
	CSS: {
		href: "/",
		icon: <FontAwesomeIcon icon={faCss3} style={{ fontSize: 50 }} />,
	},
}
