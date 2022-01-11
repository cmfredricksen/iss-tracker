<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/tracker.json');
		const tracker = await res.json();

		return {
			props: {
				tracker
			}
		};
	};
</script>

<script>
	export let tracker;
</script>

<slot>
	<h1>{tracker.name.toUpperCase()}</h1>

	<table>
		<th colspan="2">{tracker.name.toUpperCase()}</th>
		<tr>
			<td>ID</td>
			<td>{tracker.id}</td>
		</tr>
		<tr>
			<td>Latitude</td>
			<td>{tracker.latitude}</td>
		</tr>
		<tr>
			<td>Longitude</td>
			<td>{tracker.longitude}</td>
		</tr>
		<tr>
			<td>Altitude</td>
			<td>{tracker.altitude.toFixed()} miles</td>
		</tr>
		<tr>
			<td>Velocity</td>
			<td>{tracker.velocity.toFixed()} MPH</td>
		</tr>
		<tr>
			<td>Visibility</td>
			<td>{tracker.visibility}</td>
		</tr>
		<tr>
			<td>Timestamp</td>
			<td>{tracker.timestamp}</td>
		</tr>
		<tr>
			<td>DayNum</td>
			<td>{tracker.daynum}</td>
		</tr>
	</table>
</slot>

<style>
	table {
		border: 2px solid black;
		font-size: large;
		background-color: black;
		border-radius: 0.5rem;
	}
	th {
		padding: 1rem 0;
		color: white;
	}
	td {
		padding: 0.5rem;
		border: 1px solid black;
		background-color: darkslateblue;
		color: palegoldenrod;
	}
</style>
