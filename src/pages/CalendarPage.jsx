import { useEffect, useMemo, useState } from 'react';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export default function CalendarPage() {
  const [periodType, setPeriodType] = useState('month');

  const isFirstVisit = useMemo(() => {
    const storedValue = sessionStorage.getItem('isFirstVisit');
    return storedValue ? JSON.parse(storedValue) : true;
  }, []);

  const newDate = new Date();
  const month = newDate.setMonth(newDate.getMonth());
  // const day = newDate.setDate(newDate.getDate());
  const currentMonth = dayjs(month).format('MMMM-YYYY').toLowerCase();
  // const currentDay = dayjs(day).format('D-MMM-YYYY').toLowerCase();

  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstVisit) {
      navigate(`/calendar/month/${currentMonth}`);
      sessionStorage.setItem('isFirstVisit', 'false');
      setPeriodType('month');
    }
    // else {
    //   navigate(`/calendar/day/${currentDay}`);
    //   setPeriodType('day');
    // }
  }, [navigate, isFirstVisit, currentMonth]);

  return (
    <>
      <CalendarToolbar periodType={periodType} />
      {isFirstVisit ? <ChoosedMonth /> : <ChoosedDay />}
    </>
  );
}

/* "1. Компонент рендериться на маршрут /calendar. ✅
2. При першому вході на сторінку компонент виконує переадресацію на розширений маршрут /calendar/month/:currentDate для відображення календяря місяця ✅
2. Сторінка повинна відображатись відповідно до макету на 3х розширеннях(375, 768, 1440) ✅
3. На сторінці знаходиться модуль CalendarToolbar - з яким користувач може обрати тип періоду, та його інтервал ✅
4. На сторінці відображаеться один з модулів періоду дат календаря:
 - ChoosedMonth - дозволяє подивитись всі задачі на місяць, перейти на сторінку одного дня ChoosedDay. ✅
 - ChoosedDay - дозволяє створювати задачі та розділити ці задачі  на групи по ступеню їх виконання. ✅
5. При новому відвідуванні додатку та першому вході на сторінку відображаеться модуль ChoosedMonth з розкладкою комірок з датами поточного місяця. ✅
6. На сторінці повинен здійснюватись запит за завданнями, якщо вони відсутні в глобальному стейті 
7. Успіх - дані записуються у відповідний стейт 
8. Помилка - користувачу показується відповідне пуш-повідомлення"  */
