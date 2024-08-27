export const queryAllFiles = async () => {
  return useDrizzle().select().from(tables.files).all();
};

export default eventHandler(async () => {
  return await queryAllFiles();
});
