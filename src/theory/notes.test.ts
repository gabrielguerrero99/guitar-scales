import { describe, it, expect } from "vitest";
import { normalize, transpose } from "./notes";

// "normalize" function tests
describe("normalize", () => {
    it("leaves values already in 0–11 unchanged", () => {
        expect(normalize(0)).toBe(0);
        expect(normalize(11)).toBe(11);
    });

    it("wraps values above 11 back into range", () => {
        expect(normalize(12)).toBe(0);
        expect(normalize(19)).toBe(7);
    });

    it("wraps negative values into range", () => {
        expect(normalize(-1)).toBe(11);
        expect(normalize(-3)).toBe(9);
    });

    it("returns 0 (not -0) for negative multiples of 12", () => {
        expect(normalize(-12)).toBe(0);
    });

    it("wraps values more than one octave below 0", () => {
        expect(normalize(-25)).toBe(11);
    });
});

// "transpose" function tests
describe("transpose", () => {
    it("moves a note up by positive semitones", () => {
        expect(transpose(0, 7)).toBe(7);
    });

    it("wraps from B back to C", () => {
        expect(transpose(11, 1)).toBe(0);
    });

    it("moves a note down by negative semitones", () => {
        expect(transpose(0, -3)).toBe(9);
    });

    it("returns the same note for 0 semitones", () => {
        expect(transpose(5, 0)).toBe(5);
    });

    it("returns the same note after whole octaves", () => {
        expect(transpose(4, 24)).toBe(4);
    });
});