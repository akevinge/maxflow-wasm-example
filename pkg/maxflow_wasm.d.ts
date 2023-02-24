/* tslint:disable */
/* eslint-disable */
/**
*/
export class SimpleMaxFlow {
  free(): void;
/**
*/
  constructor();
/**
* @param {number} n
* @returns {Uint32Array}
*/
  add_nodes(n: number): Uint32Array;
/**
* @returns {number}
*/
  add_node(): number;
/**
* @param {number} u
* @param {number} v
* @param {number} capacity
* @returns {number}
*/
  add_arc_with_capacity(u: number, v: number, capacity: number): number;
/**
* @param {number} source
* @param {number} sink
* @returns {any}
*/
  solve_maxflow(source: number, sink: number): any;
/**
* @param {number} edge_id
* @returns {number}
*/
  tail(edge_id: number): number;
/**
* @param {number} edge_id
* @returns {number}
*/
  head(edge_id: number): number;
/**
* @returns {number}
*/
  num_arcs(): number;
}
