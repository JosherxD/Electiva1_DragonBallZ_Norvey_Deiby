export const getUrl = async (url) => {
    const response = await fetch(url);
    return response;
};
