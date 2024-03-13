export const snake2Camel = (str: string, upper = true) => {
    if (upper) return str.split('_').map((s) => s[0].toUpperCase() + s.slice(1)).join('');
    return str.split('_').map((s, i) => i === 0 ? s : s[0].toUpperCase() + s.slice(1)).join('');
}

export const snake2Hyphen = (str: string, capitalized = true) => {
    if (capitalized) return str.split('_').map((s) => s[0].toUpperCase() + s.slice(1)).join('-');
    return str.replace(/_/g, '-');
}

export const snake2Capitalized = (str: string) => {
    return str.split('_').map((s) => s[0].toUpperCase() + s.slice(1)).join(' ');
}