export interface Info {
  fieldName: string;
  fieldValue: string;
}

// Interface for the main Resume document
export interface ResumeState {
  title: string;
  description: string;
  info: Info[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

// Interface for the main "experience" document
export interface Experience {
  icon: string;
  title: string;
  description?: string; // Description is optional
  items: ExperienceItem[];
}
export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

// Interface for the main "Education" document
export interface Education {
  icon: string;
  title: string;
  description?: string; // Description is optional
  items: EducationItem[];
}
