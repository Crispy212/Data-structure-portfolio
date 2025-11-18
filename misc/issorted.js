export function isSorted(arr) {
    let iterations = 0;

    for (let i = 1; i < arr.length; i++) {
        iterations++;

        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            iterations++; // hver while-iteration
            arr[j + 1] = arr[j];
            j--;
        }

        iterations++;

        arr[j + 1] = key;
    }

    let sorted = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            sorted = false;
            break;
        }
    }

    return {
        arr,
        iterations,
        sorted
    };
}
