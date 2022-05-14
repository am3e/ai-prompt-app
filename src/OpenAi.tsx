import { ResponseInfo } from "./interfaces"

const submitToApi = async (userprompt : string) => {
    const data = {
        prompt: userprompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    }
    const res = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_APIKEY}`,
        },
        body: JSON.stringify(data)
    })
    const returnData = await res.json()
    
    const submission : ResponseInfo = {
        userPrompt: `${userprompt}`,
        userResponse: returnData.choices[0].text,
        requestId: returnData.id
    }
    return submission
}

export { submitToApi }
