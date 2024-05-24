export const shuffle = () =>
    new Array(16)
        .fill()
        .map((_, i) => i + 1)
        .sort(() => Math.random() - 0.5)
        .map((x, i) => ({ value: x, index: i }));

export const isSolvable = (numbers) => {
    let inversions = 0;
    const flattened = numbers.map(n => n.value);
    for (let i = 0; i < flattened.length - 1; i++) {
        for (let j = i + 1; j < flattened.length; j++) {
            if (flattened[i] !== 16 && flattened[j] !== 16 && flattened[i] > flattened[j]) {
                inversions++;
            }
        }
    }
    const emptyRowFromBottom = 4 - Math.floor(numbers.find(n => n.value === 16).index / 4);
    return (emptyRowFromBottom % 2 === 0) ? (inversions % 2 !== 0) : (inversions % 2 === 0);
};
