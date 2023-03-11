export const selectCategories = (state) => {
  return state.categories.currentCategories
?.reduce((acc, item) => {
  const { title, items } = item;
  acc[title] = items;
  return acc;
}, {});
};
