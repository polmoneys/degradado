export async function sleep(ms: number) {
  return await new Promise(resolve => setTimeout(resolve, ms))
}

export const scrollToElement = (selector: string): void => {
  const el = document.querySelector(selector)
  if (el != null) {
    el.scrollIntoView()
  }
}
export const randomBool = (): boolean => Math.random() < 0.5

/*
  black(10);
*/

export const black = (percent: number): string => `rgba(0,0,0,${percent / 100})`

export function handleErrors<A extends any[]>(
  p: (...args: A) => Promise<void>,
): (...args: A) => void {
  return (...args: A) => {
    try {
      p(...args).catch(err => {
        console.log('Error thrown asynchronously', err)
      })
    } catch (err) {
      console.log('Error thrown synchronously', err)
    }
  }
}
