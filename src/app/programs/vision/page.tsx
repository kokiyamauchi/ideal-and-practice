import { Metadata } from "next";
import ProgramDetailTemplate from "@/components/ProgramDetailTemplate";
import { programs } from "@/lib/programs-data";

const programId = "vision-connection";
const program = programs.find((p) => p.id === programId)!;

export const metadata: Metadata = {
  title: `理想と実践｜${program.title}`,
  description: program.summary,
};

export default function Vision() {
  return <ProgramDetailTemplate program={program} />;
}
