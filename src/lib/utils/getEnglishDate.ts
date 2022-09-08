import dayjs from "dayjs";

export function getEnglishDate(date: string | number | Date) {
  return dayjs(date).format("MMMM d, YYYY");
}
