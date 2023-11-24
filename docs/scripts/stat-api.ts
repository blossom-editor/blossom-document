// console.log(import.meta.env.MODE)
//@ts-ignore
const isDev = import.meta.env.DEV

export const info = () => {
  if (!isDev) fetch('https://www.wangyunf.com/bl/article/open/info?id=20153').then(() => {})
}
