// Binary Search
// Given a sorted array of numbers, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// The runtime of this algorithm is O(log n) because it is a binary search.
export default function bs_list(haystack: number[], needle: number): boolean {
    // is it ordered?
    // if not, sort it
    const sorted = haystack.sort((a, b) => a - b);
    let subArray = sorted;
    let isFound = false;

    while (subArray.length > 0) {
        // find the middle
        const middleIndex = Math.floor(subArray.length / 2);
        const middle = subArray[middleIndex];

        // if the middle is the needle, return true
        if (middle === needle) {
            isFound = true;
            break;
        }

        // if the middle is less than the needle, search the right half
        if (middle < needle) {
            subArray = subArray.slice(middleIndex + 1);
        }

        // if the middle is greater than the needle, search the left half
        if (middle > needle) {
            subArray = subArray.slice(0, middleIndex);
        }
    }

    return isFound;

    // if yes, continue
    // find the middle
    const middleIndex = Math.floor(sorted.length / 2);
    const middle = sorted[middleIndex];

    // if the middle is the needle, return true
    if (middle === needle) {
        return true;
    }

    // if the middle is less than the needle, search the right half
    if (middle < needle) {
        subArray = sorted.slice(middleIndex + 1);
    }

    // if the middle is greater than the needle, search the left half
    if (middle > needle) {
        subArray = sorted.slice(0, middleIndex);
    }

    // if the subarray is empty, return false
    if (subArray.length === 0) {
        return false;
    }

    // if the middle is not the needle, return false
    return false;
}
