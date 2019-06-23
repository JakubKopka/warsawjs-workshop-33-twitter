export function myDate(value) {
    const d = new Date(value);
    if (isNaN(d)) {
        return null;
    }
    return d.toLocaleString('pl-PL');

}
