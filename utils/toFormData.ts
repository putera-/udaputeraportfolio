export const toFormData = (data: Record<string, any>): FormData => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
        if (value) {
            formData.append(key, value);
        }
    }

    return formData;
}
