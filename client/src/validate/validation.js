export const validate = (activity, activities = []) => {
  let errors = {};
  // \u00f1 y \u00d1 son el equivalente para "ñ" y "Ñ",
  if (!activity.name.trim()) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(activity.name)) {
    errors.name = "The name only includes letters";
  } else if (activities.includes(activity.name.trim())) {
    errors.name = "Existing activity";
  }
  if (!activity.difficulty) errors.difficulty = "Difficulty is required";
  if (!activity.duration) errors.duration = "Duration is required";
  if (!activity.season) errors.season = "Season is required";
  if (activity.countries.length === 0)
    errors.countries = "Country is required";

  return errors;
};
