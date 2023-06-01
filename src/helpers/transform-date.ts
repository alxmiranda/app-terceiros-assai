const transformDate = (date: string | Date, withHours: boolean = false) => {
  const instanceDate = new Date(date);
  const dateString = instanceDate.toLocaleDateString();
  const hoursString = instanceDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (withHours) return `${dateString} ${hoursString}`;
  return dateString;
};

export default transformDate;
