import { Features } from "../components/Feature";
import { Hero } from "../components/Hero";
import classes from "./Home.module.css";
export default function Home() {
	return (
		<div className={classes.HomePage}>
			<Hero />
			<Features />
		</div>
	);
}
