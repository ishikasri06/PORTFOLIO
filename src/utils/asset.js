// Prefixes a public asset path with the deploy base (e.g. `/PORTFOLIO/`).
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
