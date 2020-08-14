import { Optional } from "./types";

export function accessContext(): Optional<typeof AudioContext> {
  if (typeof window === "undefined") return null;
  return window.AudioContext || window.webkitAudioContext || null;
}
