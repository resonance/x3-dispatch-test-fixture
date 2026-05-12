// Calculates discounted prices for various customer tiers.

type Tier = "bronze" | "silver" | "gold" | "platinum";

const THRESHOLDS = [1000, 500, -Infinity] as const;

const MULTIPLIERS: Record<Tier, readonly [number, number, number]> = {
  bronze: [0.95, 0.97, 1.0],
  silver: [0.9, 0.93, 0.97],
  gold: [0.85, 0.9, 0.95],
  platinum: [0.8, 0.85, 0.92],
};

function isTier(tier: string): tier is Tier {
  return tier in MULTIPLIERS;
}

export function calculateDiscount(tier: string, amount: number): number {
  if (!isTier(tier)) {
    return amount;
  }
  const bracket = THRESHOLDS.findIndex((min) => amount >= min);
  return amount * MULTIPLIERS[tier][bracket];
}
