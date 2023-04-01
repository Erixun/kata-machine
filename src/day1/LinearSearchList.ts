export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let hasFound = false;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            hasFound = true;
            break;
        }
    }
    return hasFound;
}