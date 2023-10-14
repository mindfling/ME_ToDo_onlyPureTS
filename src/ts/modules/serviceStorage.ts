// работа local storage

interface iTask {
  id: string,
  name: string,
  status: boolean,
  time?: number,
  date?: number,
}


export const getTaskData = (storageKey: string): iTask[] => {
  const data: iTask[] = localStorage.getItem(storageKey);
  console.log('storage data getTaskData', data);
  return (data ? JSON.parse(data) : []);
}


export const setTaskData = (storageKey: string, data: iTask[]): void => {
  localStorage.setItem(storageKey, JSON.stringify(data));
}


export const addTaskData = (storageKey: string, task: iTask) => {
  const data: iTask[] = getTaskData(storageKey); // получаем
  data.push(task); // апдейтим
  const newData = data;
  setTaskData(storageKey, newData) // записываем обратно
}


// удаляем задачу по id
export const removeTaskData = (storageKey: string, id: string) => {
  const data = getTaskData(storageKey); // получаем
  const newData = data.filter((task: iTask) => task.id !== id)
}




