export async function fetchPlayerInfo(name: string, numbers: string) {
    const url = `https://overfast-api.tekrop.fr/players/${name}-${numbers}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      return(result)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        return(null)
      } else {
        console.error(error);
        return(null)
      }
    }
  }