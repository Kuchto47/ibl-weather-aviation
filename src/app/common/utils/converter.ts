type ObjectifiedMapRecord<K, V> = {
    key: K;
    value: V;
};

export function convertMapToArray<K, V>(map: Map<K, V> | undefined): ObjectifiedMapRecord<K, V>[] {
    if (!map) return [];
    return Array.from(map, ([key, value]) => ({ key, value }));
}
