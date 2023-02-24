import * as wasm from "./maxflow_wasm_bg.wasm";
import { __wbg_set_wasm } from "./maxflow_wasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./maxflow_wasm_bg.js";
