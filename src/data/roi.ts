import type { RoiInputs, RoiResult } from "@/types";

export const LABOR_AUTOMATION_FACTOR = 0.6;

export const RECAPTURE_RATE_RANGE = { min: 0.25, max: 0.4, step: 0.01 };

export const ROI_DEFAULTS: RoiInputs = {
  monthlyLeads: 120,
  avgJobValue: 450,
  closeRate: 0.35,
  missedShare: 0.3,
  weeklyHours: 6,
  hourlyCost: 28,
  recaptureRate: 0.3,
};

export function calculateRoi(inputs: RoiInputs): RoiResult {
  const recoveredLeads = inputs.monthlyLeads * inputs.missedShare * inputs.recaptureRate;
  const addedRevenueMonthly = recoveredLeads * inputs.closeRate * inputs.avgJobValue;
  const laborSavingsMonthly =
    inputs.weeklyHours * (52 / 12) * inputs.hourlyCost * LABOR_AUTOMATION_FACTOR;

  return {
    recoveredLeads,
    addedRevenueMonthly,
    addedRevenueAnnual: addedRevenueMonthly * 12,
    laborSavingsMonthly,
    laborSavingsAnnual: laborSavingsMonthly * 12,
  };
}
