/**
 * @description Get Honor asset URL
 * @param { string } path - Asset path relative to /honor/
 */
export const getHonorAssetUrl = (path: string): string => {
  // Remove leading slash if present and ensure it starts with honor/
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const assetPath = cleanPath.startsWith('honor/') ? cleanPath : `honor/${cleanPath}`;
  return `/${assetPath}`;
};

/**
 * @description Get image URL for Honor components
 * @param { string } path - Image path
 */
export const getImageUrl = (path: string): string => {
  // Convert the original asset path to our new structure
  if (path.startsWith('/src/assets/')) {
    const relativePath = path.replace('/src/assets/', '');
    return getHonorAssetUrl(relativePath);
  }
  return getHonorAssetUrl(path);
};
