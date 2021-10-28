import React, { Fragment } from "react";
import Counter from "./counter.jsx";

const Home = () => {
	return (
		<Fragment>
			<div className="contador">
				<Counter time={1000000} />
				<Counter time={100000} />
				<Counter time={10000} />
				<Counter time={1000} />
			</div>
		</Fragment>
	);
};

export default Home;
