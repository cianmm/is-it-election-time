export function isToday(targetTimestamp) {
  const today = new Date();
  const targetDate = new Date(targetTimestamp);

  return (
    targetDate.getDate() === today.getDate() &&
    targetDate.getMonth() === today.getMonth() &&
    targetDate.getFullYear() === today.getFullYear()
  );
}
