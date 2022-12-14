import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { playerNameSelector } from "../redux_logic/selectors";
import Gateway from "./Gateway";

export function Landing() {
	const player_name = useSelector(playerNameSelector);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const gateway = new Gateway();
		gateway.start();

		if (player_name != null) {
			navigate("arena");
		}
	}, [player_name]);

	const detectStart = (e) => {
		let code = e.which || e.keyCode;
		if (code === 13) {
			const gateway = new Gateway();
			gateway.start();

			gateway.send({
				Register: {
					name: name,
				},
			});
			navigate("/arena");
		}
	};

	return (
		<div id="landing">
			<p id="landing_text">Join the game!</p>
			<div id="register">
				<input
					id="name-input"
					type="text"
					placeholder="enter name and hit enter"
					value={name}
					onChange={(event) => setName(event.target.value)}
					onKeyUp={detectStart}
					autoComplete="off"
				/>
			</div>
			<p id="move_info">
				move with (&larr;, &uarr;, &rarr;, &darr;) or (a, w, d, s){" "}
			</p>
		</div>
	);
}
