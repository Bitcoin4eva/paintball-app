import { program } from "@/lib/programData";
import WorkoutClient from "./workout-client";

// Static export needs every workout id prerendered at build time.
export function generateStaticParams() {
  return program.map((w) => ({ id: w.id }));
}

export const dynamicParams = false;

export default function WorkoutPage() {
  return <WorkoutClient />;
}
