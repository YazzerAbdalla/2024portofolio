export default function countExperienceYears(initialData: string) {
  // Step 1: Create a Date object for August 8, 2023
  const specificDate = new Date(initialData);

  // Step 2: Get the current date
  const currentDate = new Date();

  // Step 3: Calculate the difference in years
  let yearsDifference = currentDate.getFullYear() - specificDate.getFullYear();

  // Step 4: Adjust for whether the full year has passed
  const hasFullYearPassed =
    currentDate.getMonth() > specificDate.getMonth() ||
    (currentDate.getMonth() === specificDate.getMonth() &&
      currentDate.getDate() >= specificDate.getDate());

  if (!hasFullYearPassed) {
    yearsDifference--;
  }

  return yearsDifference;
}
