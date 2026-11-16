type First<T extends readonly any[]> =
    T extends readonly [] ? never : T[0]