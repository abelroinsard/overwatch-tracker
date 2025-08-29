export type HeroWinrate = {
  hero: string;
  value: number;
};

export type Hero = {
  key: string;
  name: string;
  portrait: string;
  role: string;
}

export async function fetchPlayerInfo(name: string, numbers: string) {
  const url = `https://overfast-api.tekrop.fr/players/${name}-${numbers}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return null;
    } else {
      console.error(error);
      return null;
    }
  }
}

export async function fetchHeroes(): Promise<Hero[] | null> {
  const url = "https://overfast-api.tekrop.fr/heroes";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return null;
    } else {
      console.error(error);
      return null;
    }
  }
}

export const getCareerStats = (
  platform: any,
  mode: "quickplay" | "competitive"
) => {
  if (
    !platform ||
    !platform[mode] ||
    !platform[mode].career_stats ||
    !platform[mode].career_stats["all-heroes"]
  ) {
    return 0;
  }
  const statsArr = platform[mode].career_stats["all-heroes"];
  // Trouver la catégorie "game"
  const gameCategory = statsArr.find(
    (category: any) => category.category === "game"
  );
  if (!gameCategory || !gameCategory.stats) {
    return 0;
  }
  // Trouver le stat "time_played"
  const timePlayedStat = gameCategory.stats.find(
    (stat: any) => stat.key === "time_played"
  );
  return timePlayedStat ? timePlayedStat.value : 0;
};

export const findHeroWinrates = (
  platform: any,
  mode: "quickplay" | "competitive"
) => {
  if (
    !platform ||
    !platform[mode] ||
    !platform[mode].heroes_comparisons ||
    !platform[mode].heroes_comparisons.win_percentage ||
    !platform[mode].heroes_comparisons.win_percentage.values
  ) {
    return [];
  }
  let res: HeroWinrate[] = [];
  const statsArr = platform[mode].heroes_comparisons.win_percentage.values;
  (statsArr as Array<HeroWinrate>).forEach((element: HeroWinrate) => {
    res.push(element);
  });
  return res;
};
