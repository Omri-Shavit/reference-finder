import ear from "rabbit-ear";
import { Preview } from "./components/preview";
import { useEffect, useMemo, useState } from "react";
import { PointInput } from "./components/point-input";
import { useDB, useStore } from "./store";
import { SolutionComponent } from "./components/solution";
import { useWorker } from "./worker";
import { Settings } from "./components/settings";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "./locale";
import { Diagram } from "./components/diagram";

enum Mode {
	point = 1,
	line = 2,
}

// (window as any).test = (...args: unknown[]) => useWorker().postMessage(args);

function App() {
	const { t, i18n } = useTranslation();
	const store = useStore();
	const db = useDB();
	const [mode, setMode] = useState(Mode.point);
	const [p1, setP1] = useState({ x: 0, y: 0 });
	const [p2, setP2] = useState({ x: 1, y: 1 });
	const [sol, setSol] = useState<number>(0);

	const cp = useMemo(() => ear.cp.rectangle(db.width, db.height), [db.width, db.height]);
	const points = useMemo(() => {
		const results: IPoint[] = [
			[p1.x, p1.y]
		];
		if(mode == Mode.line) results.push([p2.x, p2.y]);
		return results;
	}, [mode, p1.x, p1.y, p2.x, p2.y]);

	function find() {
		const query = [mode, p1.x, p1.y];
		if(mode == Mode.line) query.push(p2.x, p2.y);
		useStore.setState({ running: true, solutions: [] });
		setSol(0);
		useWorker().postMessage(query.map(Number));
	}

	useEffect(() => {
		document.title = t("phrase.referenceFinder");
	}, [i18n.language])

	return (
		<div className="container px-4 d-flex flex-column h-100" style={{ maxWidth: "65rem" }}>
			<div className="flex-grow-1 pb-5">
				<div className="text-end py-2">
					<select className="form-select flag d-inline-block" style={{ width: "max-content" }}
						value={i18n.language} onChange={e => i18n.changeLanguage(e.currentTarget.value)}>
						{supportedLngs.map(l => (
							<option key={l} value={l}>{t("flag", { lng: l })} {t("name", { lng: l })}</option>
						))}
					</select>
				</div>
				<div className="row">
					<div className="col">
						<h1>{t("phrase.referenceFinder")}</h1>
					</div>
				</div>
				<div className="row mt-3 justify-content-center">
					<div className="col mb-3" style={{ flex: "0 1 12rem" }}>
						<Preview cp={cp} points={points} />
					</div>
					<div className="col mb-3" style={{ flex: "1 0 36rem" }}>
						<div className="row">
							<div className="col-auto">
								<div className="form-check">
									<input className="form-check-input" type="radio" name="mode" id="m1"
										checked={mode == Mode.point} onChange={() => setMode(Mode.point)} />
									<label className="form-check-label capitalize" htmlFor="m1">
										{t("phrase.findPoint")}
									</label>
								</div>
							</div>
							<div className="col-auto">
								<div className="form-check">
									<input className="form-check-input" type="radio" name="mode" id="m2"
										checked={mode == Mode.line} onChange={() => setMode(Mode.line)} />
									<label className="form-check-label capitalize" htmlFor="m2">
										{t("phrase.findLine")}
									</label>
								</div>
							</div>
						</div>
						{/* <NumberInput value={db.width} exp={db.widthExp} onInput={(v, exp) => useDB.setState({ ...db, width: v, widthExp: exp })} /> */}

						<PointInput label={mode == Mode.line ? " 1" : ""} value={p1} onInput={p => setP1(p)} />
						{mode == Mode.line && (
							<PointInput label=" 2" value={p2} onInput={p => setP2(p)} />
						)}
						<div className="row mt-2">
							<div className="col">
								<Settings />
							</div>
							<div className="col-auto text-end">
								<button type="button" className="btn btn-primary capitalize"
									onClick={find} disabled={store.running}>
									{store.running && !store.ready ? t("phrase.initializing") : t("phrase.go")}
								</button>
							</div>
						</div>
					</div>
				</div>
				{store.solutions.length > 0 && (
					<>
						<div className="card mt-3 d-none d-md-block">
							<div className="card-body">
								<div className="row gx-2 mb-n2">
									{store.solutions.map((s, i) => (
										<div className="col mb-2" key={i} style={{ flex: "0 1 12rem" }}>
											<button className={"w-100 p-1 btn btn-outline-secondary col solution-preview " + (sol == i ? "active" : "")}
												onClick={() => setSol(i)}>
												<Diagram data={s.diagrams[s.diagrams.length - 1]} />
												<div>{s.solution}</div>
												<div>{t("phrase.error")} {s.err}</div>
												<div>rank {s.rank}</div>
											</button>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="d-none d-md-block">
							<SolutionComponent data={store.solutions[sol]} />
						</div>
					</>
				)}
				<div className="d-md-none">
					{store.solutions.map((s, i) => <SolutionComponent key={i} data={s} />)}
				</div>
			</div>
			<footer className="row justify-content-end flex-wrap pb-3">
				<div className="col-auto">© 1999-2007 <a href="https://langorigami.com/article/referencefinder/" target="_blank">Robert J. Lang</a></div>
				<div className="col-auto">© 2018-2022 <a href="https://github.com/robbykraft/ReferenceFinder" target="_blank">Robby Kraft</a></div>
				<div className="col-auto">© 2024 <a href="https://github.com/mutsuntsai/reference-finder" target="_blank">Mu-Tsun Tsai</a></div>
			</footer>
		</div>
	);
}

export default App;
