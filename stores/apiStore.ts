export const useApiStore = defineStore('api', {
    state: () => ({
        // token: null,
    }),
    actions: {
        // getHeader() {
        //     // const Auth = useAuthStore();
        //     const header = {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         // Authorization: ''
        //     }

        //     // if (Auth.token) {
        //     //     header.Authorization = 'Bearer ' + Auth.token;
        //     // }

        //     return header;
        // },
        async get(url: string) {
            const baseURL = useRuntimeConfig().public.apiUrl;
            try {
                const fetch = await $fetch(baseURL + url, {
                    method: 'GET',
                    credentials: 'include'
                    // headers: this.getHeader()
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
        async post(url: string, data = {}) {
            const baseURL = useRuntimeConfig().public.apiUrl;
            try {
                const fetch = $fetch(baseURL + url, {
                    method: 'POST',
                    // headers: this.getHeader(),
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
                console.log('dapet  error')
                console.log(error)
                this.handleError(error);
            }
        },
        // async put(url: string, data = {}) {
        //     const baseURL = useRuntimeConfig().public.apiUrl;
        //     try {
        //         const fetch = await $fetch(baseURL + url, {
        //             method: 'PUT',
        //             headers: this.getHeader(),
        //             body: JSON.stringify(data),
        //         });

        //         // Create a promise that will resolve after 3 seconds
        //         const timeoutPromise = new Promise((_, reject) => {
        //             setTimeout(() => {
        //                 reject(new Error('request timed out'));
        //             }, 3000);
        //         });

        //         const response = await Promise.race([fetch, timeoutPromise]);

        //         return response;
        //     } catch (error) {
        //         this.handleError(error);
        //     }
        // },
        async delete(url: string, data = {}) {
            const baseURL = useRuntimeConfig().public.apiUrl;
            try {
                const fetch = await $fetch(baseURL + url, {
                    method: 'DELETE',
                    // headers: this.getHeader(),
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
            if (error.status == 401) return navigateTo('/admin/login') // login page
            if (error.status == 403) return navigateTo('/403'); // FORBIDEN
            if (error.status == 404) return navigateTo('/404'); // NOT FOUND
            if (error.status == 500 || error.status == undefined) return navigateTo('/500'); // SERVER ERROR
            throw error;
        },
        // reset() {
        //     this.token = null;
        //     axios.defaults.headers.common['Authorization'] = undefined;
        //     localStorage.removeItem('token');
        // }
    },
})
