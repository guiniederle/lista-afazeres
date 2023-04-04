import { redirect, useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Um erro inesperado aconteceu, pedimos desculpas pelo inconveniente!</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<button onClick={redirect("/")}>
				Voltar para página inicial
			</button>
		</div>
	);
}