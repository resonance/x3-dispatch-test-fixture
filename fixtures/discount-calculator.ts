// Calculates discounted prices for various customer tiers.

type Tier = "bronze" | "silver" | "gold" | "platinum";

const HIGH_THRESHOLD = 1000;
const MID_THRESHOLD = 500;

const DISCOUNT_RATES: Record<Tier, { high: number; mid: number; low: number }> = {
  bronze: { high: 0.95, mid: 0.97, low: 1.0 },
  silver: { high: 0.9, mid: 0.93, low: 0.97 },
  gold: { high: 0.85, mid: 0.9, low: 0.95 },
  platinum: { high: 0.8, mid: 0.85, low: 0.92 },
};

export function calculateDiscount(tier: string, amount: number): number {
  const rates = DISCOUNT_RATES[tier as Tier];
  if (!rates) return amount;

  const rate =
    amount >= HIGH_THRESHOLD ? rates.high
    : amount >= MID_THRESHOLD ? rates.mid
    : rates.low;

  return amount * rate;
}
