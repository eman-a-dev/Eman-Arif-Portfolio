const assetFiles = import.meta.glob('./**/*.{avif,gif,jpeg,jpg,png,svg,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

/** Returns the URL of an image stored anywhere inside `src/assets`. */
export function asset(filename: string) {
  const path = Object.keys(assetFiles).find((filePath) => filePath.endsWith(`/${filename}`))

  if (!path) {
    throw new Error(`Asset not found: ${filename}`)
  }

  return assetFiles[path]
}
