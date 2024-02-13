export const toFormData = (data: Record<string, string>): FormData => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
        if (value) {
            formData.append(key, value as string);
        }
    }

    return formData;
}
