import React from "react";
import { useEffect } from "react";

import { Arena } from "./Arena";
import { Landing } from "./Landing";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { playerNameSelector } from "../redux_logic/selectors";
import Gateway from "./Gateway";

function Game() {
	const player_name = useSelector(playerNameSelector);
	const navigate = useNavigate();

	useEffect(() => {
		const gateway = new Gateway();
		gateway.start();

		if (player_name != null) {
			navigate("arena");
		} else {
			navigate("landing");
		}
	}, [player_name]);

	return (
		<Routes>
			<Route path="arena" element={<Arena />} />
			<Route path="landing" element={<Landing />} />
		</Routes>
	);
}

export default Game;
