function solve() {
    // Select Elements
    const textElement = document.querySelector('#text')
    const namingConventionElement = document.querySelector('#naming-convention')

    // Parse Data
    const text = textElement.value
    const namingConvention = namingConventionElement.value

    // Main Logic
    // eslint-disable-next-line no-use-before-define
    const result = applyNamingConvention(text, namingConvention)

    // Display result i DOM
    const spanElement = document.getElementById('result')
    spanElement.textContent = result

    function applyNamingConvention(text, convention) {
        const conventions = {
            'Pascal Case': () =>
                text
                    .toLowerCase()
                    .split(' ')
                    .map((x) => (x = x[0].toUpperCase() + x.slice(1)))
                    .join(''),

            'Camel Case': () =>
                text
                    .toLowerCase()
                    .split(' ')
                    .map((x, i) => (x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x))
                    .join(''),
            Default: () => 'Error!',
        }

        return (conventions[convention] || conventions.Default)()
    }
}
