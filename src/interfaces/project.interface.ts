export interface IProject {
  name: string;
  client: string;
  summary: string;
  stack: string[];
  href?: string;
  status: "live" | "case-study" | "private";
}
