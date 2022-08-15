export const addToDo = async (page, toDoName) => {
  await page.keyboard.type(toDoName);
  await page.keyboard.press("Enter");
};

export const editToDo = async (page, oldName, newName) => {
  const querySelector = `svg[data-testid="edit-${oldName}"]`;
  await page.click(querySelector);
  await page.waitForTimeout(50);
  const promises = [...oldName].map(() => page.keyboard.down("Backspace"));
  await Promise.all(promises);
  await page.waitForTimeout(50);
  await page.keyboard.type(newName);
  await page.keyboard.press("Enter");
};
