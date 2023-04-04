export default function bubble_sort(arr: number[]): void {
    let canSwap;
    do {
        canSwap = false;
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i],
                next = arr[i + 1];
            if (current > next) doSwap(arr, i);
        }
    } while (canSwap);

    function doSwap(arr: number[], i: number) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        canSwap = true;
    }
}
