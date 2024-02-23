const append = (formData: FormData, key: string, value: any) => {
    if (typeof value == 'object' && !Array.isArray(value)) {
        for (const [_key, newValue] of Object.entries(value)) {
            const newKey = `${key}[${_key}]`;
            append(formData, newKey, newValue)
        }
    } else if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const newKey = `${key}[${i}]`;
            append(formData, newKey, value[i])
        }
    } else {
        if (value == null) {
            formData.append(key, '');
        } else {
            formData.append(key, value);
        }
    }

}

export const toFormData = (data: Record<string, any>): FormData => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
        append(formData, key, value)
    }

    return formData;
}
