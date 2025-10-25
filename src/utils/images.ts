const modules = import.meta.glob('/src/assets/.placeholders/*.{png,jpg,jpeg,webp,svg}', { eager: true, as: 'url' });

type ImageMap = Record<string, string>;

const imageMap: ImageMap = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const name = path.split('/').pop()!.split('.').shift()!;
    return [name, url as string];
  })
);

export const getImageByName = (name: string) => imageMap[name] ?? '';
export default imageMap;
