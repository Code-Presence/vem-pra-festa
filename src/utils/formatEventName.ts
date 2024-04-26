export const formatEventName = (eventName: any) => {
  return eventName.toLowerCase().replace(/\s+/g, "-");
};
