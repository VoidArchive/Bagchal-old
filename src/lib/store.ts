import { writable } from 'svelte/store';

export const width = writable(0);
export const height = writable(0);
export const context = writable();
export const canvas = writable();
