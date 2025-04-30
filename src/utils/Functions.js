export function isNumber(event) {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
}

export function stripTags(html) {
    const regex = /(<([^>]+)>)/gi;
    return html.replace(regex, "");
}
