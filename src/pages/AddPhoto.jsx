import { useEffect, useState } from "react";
import { useAddPhoto } from "../hooks/useAddPhoto";

const AddPhoto = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [explanation, setExplanation] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    console.log(image);
  }, [image]);

  const { mutate } = useAddPhoto();

  const handlePhotoCreate = () =>
    mutate({
      date,
      title,
      author,
      explanation,
    });

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="font-bold text-2xl">Добавить фото</h1>
      <p>Дата:</p>
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        name="date"
        id="date"
        className="border-2"
      />
      <p>Название:</p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        id="title"
        className="border-2"
      />
      <p>Автор:</p>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        name="author"
        id="author"
        className="border-2"
      />
      <p>Описание:</p>
      <textarea
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        name="explanation"
        id="explanation"
        className="border-2"
      />
      <p>Фото:</p>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="file"
        name="image"
        id="image"
      />
      <div
        onClick={handlePhotoCreate}
        className="flex justify-center items-center bg-emerald-400 p-2 cursor-pointer text-white"
      >
        Создать
      </div>
    </div>
  );
};

export default AddPhoto;
