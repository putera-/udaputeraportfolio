export const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error('request timed out'));
    }, 3000);
});
