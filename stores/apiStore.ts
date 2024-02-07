export const useApiStore = defineStore('api', {
    actions: {
        handleData(data: any = {}) {
            if (data instanceof FormData) {
                return data;
            }

            return JSON.stringify(data);
        },
        async get(url: string) {
            const baseURL = useRuntimeConfig().public.apiUrl;
            try {
                const fetch = await $fetch(baseURL + url, {
                    method: 'GET',
                    credentials: 'include',
                });

                // Create a promise that will resolve after 3 seconds
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(new Error('request timed out'));
                    }, 3000);
                });

                const response = await Promise.race([fetch, timeoutPromise]);

                return response;
            } catch (error: any) {
                this.handleError(error);
            }
        },
        async post(url: string, data: any = {}) {
            const baseURL = useRuntimeConfig().public.apiUrl;

            data = this.handleData(data);

            try {
                const fetch = $fetch(baseURL + url, {
                    method: 'POST',
                    body: data,
                    credentials: 'include',
                });

                // Create a promise that will resolve after 3 seconds
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(new Error('request timed out'));
                    }, 3000);
                });

                const response = await Promise.race([fetch, timeoutPromise]);

                return response;
            } catch (error) {
                this.handleError(error);
            }
        },
        async put(url: string, data: any = {}) {
            const baseURL = useRuntimeConfig().public.apiUrl;

            data = this.handleData(data);

            try {
                const fetch = await $fetch(baseURL + url, {
                    method: 'PUT',
                    body: data,
                    credentials: 'include'
                });

                // Create a promise that will resolve after 3 seconds
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(new Error('request timed out'));
                    }, 3000);
                });

                const response = await Promise.race([fetch, timeoutPromise]);

                return response;
            } catch (error) {
                this.handleError(error);
            }
        },
        async delete(url: string, data: any = {}) {
            const baseURL = useRuntimeConfig().public.apiUrl;
            try {
                const fetch = await $fetch(baseURL + url, {
                    method: 'DELETE',
                    body: JSON.stringify(data),
                    credentials: 'include'
                });

                // Create a promise that will resolve after 3 seconds
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(new Error('request timed out'));
                    }, 3000);
                });

                const response = await Promise.race([fetch, timeoutPromise]);

                return response;
            } catch (error) {
                this.handleError(error);
            }
        },
        handleError(error: any) {
            if (error.status == 401) {
                window.localStorage.clear(); // clear local storage
                return navigateTo('/admin/login'); // login page
            }

            if (error.status == 404 || error.status == 500 || error.status == undefined) {
                throw createError({
                    statusCode: error.status
                });
            }

            throw error.data.errors;
        }
    },
})
