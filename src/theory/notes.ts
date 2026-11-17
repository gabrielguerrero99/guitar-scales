export type PitchClass = number;

// Takes any integer and returns the matching pitch class 
// from 0 to 11
export function normalize(n: number): PitchClass {
    return ((n % 12) + 12) % 12;
}

// Shifts a note up or down by some number of semitones
export function transpose(pc: PitchClass, semitones: number): PitchClass {
    return normalize(pc + semitones);
}