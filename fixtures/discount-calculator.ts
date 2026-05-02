// Calculates discounted prices for various customer tiers.

type Tier = "bronze" | "silver" | "gold" | "platinum";
type Bracket = { readonly minAmount: number; readonly rate: number };

// Per-tier brackets ordered by descending minAmount; first match wins.
const TIER_BRACKETS: Readonly<Record<Tier, readonly Bracket[]>> = {
  bronze: [
    { minAmount: 1000, rate: 0.95 },
    { minAmount: 500, rate: 0.97 },
    { minAmount: 0, rate: 1.0 },
  ],
  silver: [
    { minAmount: 1000, rate: 0.9 },
    { minAmount: 500, rate: 0.93 },
    { minAmount: 0, rate: 0.97 },
  ],
  gold: [
    { minAmount: 1000, rate: 0.85 },
    { minAmount: 500, rate: 0.9 },
    { minAmount: 0, rate: 0.95 },
  ],
  platinum: [
    { minAmount: 1000, rate: 0.8 },
    { minAmount: 500, rate: 0.85 },
    { minAmount: 0, rate: 0.92 },
  ],
};

function isKnownTier(tier: string): tier is Tier {
  return tier in TIER_BRACKETS;
}

export function calculateDiscount(tier: string, amount: number): number {
  if (!isKnownTier(tier)) return amount;
  const bracket = TIER_BRACKETS[tier].find((b) => amount >= b.minAmount);
  return amount * (bracket?.rate ?? 1.0);
}
