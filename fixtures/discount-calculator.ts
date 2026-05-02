// Calculates discounted prices for various customer tiers.

type Tier = "bronze" | "silver" | "gold" | "platinum";

const DISCOUNT_RATES: Record<Tier, readonly [number, number, number]> = {
  bronze:   [1.00, 0.97, 0.95],
  silver:   [0.97, 0.93, 0.90],
  gold:     [0.95, 0.90, 0.85],
  platinum: [0.92, 0.85, 0.80],
};

const BRACKET_THRESHOLDS = [500, 1000] as const;

export function calculateDiscount(tier: string, amount: number): number {
  const rates = DISCOUNT_RATES[tier as Tier];
  if (!rates) return amount;

  const bracket = BRACKET_THRESHOLDS.findIndex((t) => amount < t);
  const rate = rates[bracket === -1 ? rates.length - 1 : bracket];
  return amount * rate;
}
