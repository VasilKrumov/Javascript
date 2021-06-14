function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    return currencyFormatter.bind(null, separator, symbol, symbolFirst)
}
