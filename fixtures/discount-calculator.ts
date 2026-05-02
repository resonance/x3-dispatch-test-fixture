// Calculates discounted prices for various customer tiers.
// Intentionally written with duplication and nested branches for refactor practice.

export function calculateDiscount(tier: string, amount: number): number {
  if (tier === "bronze") {
    if (amount >= 1000) {
      return amount * 0.95;
    } else if (amount >= 500) {
      return amount * 0.97;
    } else {
      return amount * 1.0;
    }
  } else if (tier === "silver") {
    if (amount >= 1000) {
      return amount * 0.90;
    } else if (amount >= 500) {
      return amount * 0.93;
    } else {
      return amount * 0.97;
    }
  } else if (tier === "gold") {
    if (amount >= 1000) {
      return amount * 0.85;
    } else if (amount >= 500) {
      return amount * 0.90;
    } else {
      return amount * 0.95;
    }
  } else if (tier === "platinum") {
    if (amount >= 1000) {
      return amount * 0.80;
    } else if (amount >= 500) {
      return amount * 0.85;
    } else {
      return amount * 0.92;
    }
  }
  return amount;
}
