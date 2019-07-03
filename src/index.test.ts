import upArrow from "./index";

test('upArrow(4n, 3n, 1n)', () => {
    expect(upArrow(4n, 3n, 1n)).toBe(64n);
});

test('upArrow(2n, 4n, 2n)', () => {
    expect(upArrow(2n, 4n, 2n)).toBe(65536n);
});

test('upArrow(10n, 2n, 2n)', () => {
    expect(upArrow(10n, 2n, 2n)).toBe(10_000_000_000n);
});

test('upArrow(3n, 2n, 3n)', () => {
    expect(upArrow(3n, 2n, 3n)).toBe(7_625_597_484_987n);
});