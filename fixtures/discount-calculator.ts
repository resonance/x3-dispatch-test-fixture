// Calculates discounted prices for various customer tiers.

type Tier = "bronze" | "silver" | "gold" | "platinum";

const TIER_RULES: Record<Tier, ReadonlyArray<readonly [number, number]>> = {
  bronze:   [[1000, 0.95], [500, 0.97], [-Infinity, 1.00]],
  silver:   [[1000, 0.90], [500, 0.93], [-Infinity, 0.97]],
  gold:     [[1000, 0.85], [500, 0.90], [-Infinity, 0.95]],
  platinum: [[1000, 0.80], [500, 0.85], [-Infinity, 0.92]],
};

export function calculateDiscount(tier: string, amount: number): number {
  const rules = TIER_RULES[tier as Tier];
  if (!rules) return amount;
  for (const [minAmount, multiplier] of rules) {
    if (amount >= minAmount) return amount * multiplier;
  }
  return amount;
}
