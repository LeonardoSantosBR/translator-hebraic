import { postTranslate } from "./post-translate";

export async function handleTranslate(data: { text?: string }) {
  return await postTranslate({ text: data.text });
}
