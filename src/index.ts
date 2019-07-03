const upArrow = (
  base: bigint,
  exponent: bigint,
  upArrowAmount: bigint
): bigint => {
  if (upArrowAmount <= 0) {
    return base * exponent;
  } else if (upArrowAmount === 1n) {
    return base ** exponent;
  } else if (exponent <= 1) {
    return base;
  }
  return upArrow(
    base,
    upArrow(base, exponent - 1n, upArrowAmount),
    upArrowAmount - 1n
  );
};

export default upArrow;
