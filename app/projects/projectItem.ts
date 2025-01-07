export interface ProjectItem {
  title: string;
  description: string;
  rating: number;
  labels: string[];
  highlights: string[];
  timeline: string;
  timestamp: number; // this is used for sorting
  effort: string;
  technologies: string[];
  imageSrc: string;
  imageAlt: string;
}
