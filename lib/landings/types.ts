export type LandingStatus = "draft" | "active" | "archived";

export interface LandingDefinition {
  key: string;
  route: string;
  title: string;
  description: string;
  status: LandingStatus;
}
