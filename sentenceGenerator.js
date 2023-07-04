import { PARAGRAPHS, MAX_LENGTH, ERROR_MESSAGE } from "./config";

export async function generateSentence() {
  try {
    const request = await fetch(
      `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${PARAGRAPHS}&max_length=${MAX_LENGTH}&start_with_lorem_ipsum=false`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "UXvZUYY49EJwl+fWvFT+Lw==iCytuAWFB6rv4Cu7",
        },
        contentType: "application/json",
      }
    );

    const sentence = await request.json();
    return sentence;

    console.log(sentence);
  } catch (err) {
    throw err;
  }
}
