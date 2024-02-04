type ObjectifiedMapRecord<K, V> = {
    key: K;
    value: V;
};

export function convertMapToArray<K, V>(map: Map<K, V>): ObjectifiedMapRecord<K, V>[] {
    return Array.from(map, ([key, value]) => ({ key, value }));
}
