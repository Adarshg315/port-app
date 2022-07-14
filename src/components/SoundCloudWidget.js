import "./SoundWidgetStyle.css"

export const SoudCloudWidget = (title) => (
	<div>
		<iframe
			title={title}
			width="100%"
			height="450"
			scrolling="no"
			frameBorder="no"
			allow="autoplay"
			src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1467196567&color=%23040405&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
		></iframe>
		<div className="widget">
			<a
				href="https://soundcloud.com/adarshgo"
				title="Adarsh Goyal"
				target="_blank"
				rel="noreferrer"
				style={{ color: "#cccccc", textDecoration: "none" }}
			>
				Adarsh Goyal
			</a>{" "}
			·{" "}
			<a
				href="https://soundcloud.com/adarshgo/sets/techno"
				title="Tech-no"
				target="_blank"
				rel="noreferrer"
				style={{ color: "#cccccc", textDecoration: "none" }}
			>
				Tech-no
			</a>
		</div>
	</div>
)
