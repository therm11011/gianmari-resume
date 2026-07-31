export const usePublicAsset = (path: string) => {
  if (/^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(path)) {
    return path
  }

  const baseURL = useRuntimeConfig().app.baseURL

  return `${baseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}
