import { SimpleMaxFlow } from "./pkg/maxflow_wasm";

const smf = new SimpleMaxFlow();
const [SOURCE, SINK] = smf.add_nodes(2);

const [C1, C2] = smf.add_nodes(2);
const [R1, R2] = smf.add_nodes(2);

const test_arc = smf.add_arc_with_capacity(SOURCE, C1, 3);
smf.add_arc_with_capacity(SOURCE, C2, 3);

smf.add_arc_with_capacity(C1, R1, 1000);
smf.add_arc_with_capacity(C1, R2, 1000);
smf.add_arc_with_capacity(C2, R2, 1000);

smf.add_arc_with_capacity(R1, SINK, 3);
smf.add_arc_with_capacity(R2, SINK, 3);

const { max_flow, flow } = smf.solve_maxflow(SOURCE, SINK);
console.log(max_flow); // 6
console.log(smf.tail(test_arc)); // 0
console.log(smf.head(test_arc)); // 2
