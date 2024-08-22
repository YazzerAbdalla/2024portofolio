import { Info, ResumeState } from "@/types/resumeTypes";

export default function sortInfo(resume: ResumeState): Info[] {
  let info;
  if (resume) info = resume.info;

  if (!info) {
    return [{ fieldName: "", fieldValue: "" }]; // Return an empty array if info is null or undefined
  }
  let sortedInfo = [];

  sortedInfo = info.sort((a, b) => {
    if (a.fieldName.includes("email") && !b.fieldName.includes("email")) {
      return 1;
    }
    if (!a.fieldName.includes("email") && b.fieldName.includes("email")) {
      return -1;
    }
    return 0;
  });

  return sortedInfo;
}
