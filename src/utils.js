// This is taking the relatrive path of the file 
// Also it takes the base url of our website and appending the relative path onto it and return it back

export const getImageUrl = (path) => {
    return `assets/${path}`
    // return new URL(`./../public/assets/${path}`, import.meta.url).href;
}