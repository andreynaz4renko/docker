import { useMutation } from "@tanstack/react-query";
import { addPhoto } from "../api/photos";

export const useAddPhoto = () =>
  useMutation({
    mutationKey: ["photo", "add"],
    mutationFn: (photo) => addPhoto(photo),
  });
