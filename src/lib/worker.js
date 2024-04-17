import ref from "./ref";
import refWasm from "./ref.wasm";

// We use this entry script to hook up with webpack
// See https://gist.github.com/surma/b2705b6cca29357ebea1c9e6e15684cc
ref({
	locateFile(path) {
		if(path.endsWith(".wasm")) return refWasm;
		return path;
	}
});