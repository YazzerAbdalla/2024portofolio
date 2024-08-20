import { statsDataState } from "@/components/Stats";

export default function sortStats(stats: statsDataState[]): statsDataState[] {
  const sortedStatsData = stats.sort((a, b) => {
    if (a.text.includes("Years") && !b.text.includes("Years")) {
      return -1; // a should come before b
    }
    if (!a.text.includes("Years") && b.text.includes("Years")) {
      return 1; // b should come before a
    }
    return 0; // a and b are equal in terms of "Years" presence
  });

  return sortedStatsData;
}
