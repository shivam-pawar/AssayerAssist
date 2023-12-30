export const capitalizeFirstLetter = (fieldName: string) => {
  return fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase();
};
export const countRecords = (data: any, targetType: any) => {
  return data.reduce((count: number, item: any) => {
    return count + (item.sampleType === targetType ? 1 : 0);
  }, 0);
};
export const validateData = (email: string, password: string) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwdRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!emailRegex) return "Invalid email address";
  if (!passwdRegex) return "Invalid password";
};
