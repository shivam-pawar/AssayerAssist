export const capitalizeFirstLetter = (fieldName: string) => {
  return fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase();
};
export const countRecords = (data: any, targetType: any) => {
  return data.reduce((count: number, item: any) => {
    return count + (item.sampleType === targetType ? 1 : 0);
  }, 0);
};
