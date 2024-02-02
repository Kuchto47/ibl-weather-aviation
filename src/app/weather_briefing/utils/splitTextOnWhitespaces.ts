export const splitTextOnSpaces = (text: string | undefined): string[] => {
    return text ? text.split(' ').filter((str) => str.length > 0) : [];
};
