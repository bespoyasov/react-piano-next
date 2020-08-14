/// <reference types="next" />
/// <reference types="next/types/global" />

type SoundfontType = typeof Soundfont;
type AudioContextType = typeof AudioContext;

interface Window extends Window {
  webkitAudioContext: AudioContextType;
}
