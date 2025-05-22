import axios from "axios";

export async function postTranslate({ text }: { text?: string }) {
  const request = await axios.post(
    `https://translation.googleapis.com/language/translate/v2?key=${
      import.meta.env.VITE_API_KEY
    }`,
    {
      q: text,
      source: "pt",
      target: "he",
      format: "text",
    }
  );

  const data = await request.data;
  return data;
}
