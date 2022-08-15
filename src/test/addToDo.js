export const addToDo = async (page, toDoName) => {
  await page.keyboard.type(toDoName);
  await page.keyboard.press("Enter");
};
