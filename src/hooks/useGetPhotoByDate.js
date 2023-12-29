import { useQuery } from "@tanstack/react-query";
import { getPhotoByDate } from "../api/photos";

export const useGetPhotoByDate = (date) =>
  useQuery({
    queryKey: ["photo", date],
    queryFn: () => getPhotoByDate(date),
  });
