import { TeamMember } from "@/src/types/models";

export function sortMember({ page }: { page: any }) {
  if (page && page.results && page.results.length > 0) {
    const femaleNames: string[] = [
      "Patricia",
      "Bérengère",
      "Elise",
      "Christel",
      "Myriam",
      "Roxane",
      "Claudine",
    ];
    const sortedFemaleTeam: TeamMember[] = page.results
      .filter((item: TeamMember) =>
        femaleNames.includes(item.data.prenom ?? "")
      )
      .sort((a: TeamMember, b: TeamMember) =>
        (a.data.prenom ?? "").localeCompare(b.data.prenom ?? "")
      );
    const sortedMaleTeam: TeamMember[] = page.results
      .filter(
        (item: TeamMember) => !femaleNames.includes(item.data.prenom ?? "")
      )
      .sort((a: TeamMember, b: TeamMember) =>
        (a.data.prenom ?? "").localeCompare(b.data.prenom ?? "")
      );

    const sortedTeam = [...sortedFemaleTeam, ...sortedMaleTeam];

    return sortedTeam;
  }
}
