async function createQuery(text: any) {
  const response = await fetch(`http://localhost:50021/audio_query?speaker=1&text=${text}`, {
    method: "POST"
  });
  const data = await response.json();
  return data;
}

async function createVoice(text: any) {
  const query = await createQuery(text);
  const response = await fetch("http://localhost:50021/synthesis?speaker=1", {
    method: "POST",
    body: JSON.stringify(query),
    headers: {
      "Content-Type": "application/json",
      'accept': 'audio/wav',
      'responseType': "stream"
    }
  });
  const blob = await response.blob();
  console.log(text)
  return blob;
}

export {createQuery, createVoice}