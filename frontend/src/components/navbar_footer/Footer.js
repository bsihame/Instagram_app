import React from "react";
import "../../CSS/Footer.css";

export default function Footer({ className }) {
	return (
		<footer className={className}>
			<div className="footerDiv">
				<a
					className="link"
					href={"https://about.instagram.com/about-us"}
					target="_blank"
					rel="noopener noreferrer"
				>
					ABOUT
				</a>
				<a
					className="link"
					href={"https://help.instagram.com/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					HELP
				</a>
				<a
					className="link"
					href={"https://about.instagram.com/blog/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					PRESS
				</a>
				<a
					className="link"
					href={"https://www.instagram.com/developer/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					API
				</a>
				<a
					className="link"
					href={"https://www.instagram.com/about/jobs/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					JOBS
				</a>
				<a
					className="link"
					href={"https://help.instagram.com/519522125107875"}
					target="_blank"
					rel="noopener noreferrer"
				>
					PRIVACY
				</a>
				<a
					className="link"
					href={"https://help.instagram.com/581066165581870"}
					target="_blank"
					rel="noopener noreferrer"
				>
					TERMS
				</a>
				<a
					className="link"
					href={"https://www.instagram.com/explore/locations/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					LOCATIONS
				</a>
				<a
					className="link"
					href={"https://www.instagram.com/directory/profiles/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					TOP ACCOUNTS
				</a>
				<a
					className="link"
					href={"https://www.instagram.com/directory/hashtags/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					HASHTAGS
				</a>

				<span className="insFacebook" to={"/press"}>
					&copy;{new Date().getFullYear()} INSTAGRAM FROM FACEBOOK
				</span>
			</div>
		</footer>
	);
}
