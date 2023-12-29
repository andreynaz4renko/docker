import { useState } from "react";
import { useGetPhotoByDate } from "../hooks/useGetPhotoByDate";
import moment from "moment";

const Home = () => {
  // Инициализируем состояние selectedDate с текущей датой
  const [selectedDate, setSelectedDate] = useState(moment());

  // Получаем данные фотографии для выбранной даты
  const { data } = useGetPhotoByDate(selectedDate.format("YYYY-MM-DD"));

  // Обработчик нажатия на стрелку влево
  const handleLeftArrow = () => {
    // Уменьшаем выбранную дату на 1 день
    setSelectedDate(selectedDate.subtract(1, "days"));
  };

  // Обработчик нажатия на стрелку вправо
  const handleRightArrow = () => {
    // Проверяем, что выбранная дата не равна текущей дате
    if (moment().format("YYYY-MM-DD") !== selectedDate.format("YYYY-MM-DD")) {
      // Увеличиваем выбранную дату на 1 день
      setSelectedDate(selectedDate.add(1, "days"));
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen max-h-screen max-w-screen bg-emerald-400">
      <img src={data?.url} alt="" className="grow object-cover" />
      <div className="flex justify-between items-center p-3 bg-white">
        <span
          className="material-symbols-rounded cursor-pointer select-none w-24 h-24 bg-slate-500 bg-opacity-10 rounded-[28px] shadow justify-center items-center inline-flex"
          onClick={handleLeftArrow}
        >
          chevron_left
        </span>
        <div className="flex flex-col gap-1 items-center">
          <h3>{data?.copyright?.trim()}</h3>
          <h1 className="font-bold text-2xl">{data?.title?.trim()}</h1>
          <h3>{data?.date}</h3>
        </div>
        <span
          className="material-symbols-rounded cursor-pointer select-none w-24 h-24 bg-slate-500 bg-opacity-10 rounded-[28px] shadow justify-center items-center inline-flex"
          onClick={handleRightArrow}
        >
          chevron_right
        </span>
      </div>
    </div>
  );
};

export default Home;
