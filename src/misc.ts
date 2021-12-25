export function addComas(value: string): string {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function addCommasDecimal(value: string): string {
    return String(value).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}