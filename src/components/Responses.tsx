import { useContext } from 'react';
import { Context } from "../Context";
import { ResponseInfo } from '../interfaces';

const Responses = () => {
    const { responsesData } = useContext<{responsesData:ResponseInfo[]}>(Context)

    if (responsesData.length == 0) {
        return null;
    }

    const responseCards : JSX.Element[] = responsesData.map(responsesData => {
        return (
            <article key={responsesData["requestId"]} className="response-card">
                <h4 className="card-prompt-title">Prompt:</h4>
                <p className="card-prompt-p">{responsesData["userPrompt"]}</p>
                <h4 className="card-response-title">Response:</h4>
                <p className="card-response-p">{responsesData["userResponse"]}</p>
            </article>
        )
    })

    return (
        <section className="responses"> 
            <h1 className="section-title">Responses</h1>
            {responseCards}
        </section>
    )
}

export default Responses