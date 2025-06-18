export const getPostedDaysAgo = (createdAt) => {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffTime = Math.abs(now - createdDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays === 0
    ? "Today"
    : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
};

export const getDaysLeftToApply = (deadline) => {
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const diffTime = deadlineDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "Application closed";
  if (diffDays === 0) return "Last day to apply!";
  return `${diffDays} day${diffDays > 1 ? "s" : ""} left`;
};

export const PostedDate = (createdAt) => {
  const date = new Date(createdAt);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day < 10 ? "0" + day : day}, ${year}`;
};
