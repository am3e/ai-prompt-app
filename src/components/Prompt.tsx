import { 
    useState, 
    useRef, 
    useContext, 
    MutableRefObject, 
    MouseEvent 
} from "react";
import { Context } from "../Context";
import { ResponseInfo } from "../interfaces";
import { submitToApi } from "../OpenAi";

const Prompt = () => {
    const [userPrompt, setUserPrompt] = useState<string>('')
    const {responsesData, setResponsesData} = useContext(Context)
    const inputRef = useRef() as MutableRefObject<HTMLTextAreaElement>

    const submitPrompt = async (e : MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (userPrompt.trim()) {
            const submission : ResponseInfo = await submitToApi(userPrompt)
            const updateResponses :ResponseInfo[] = [submission, ...responsesData] 
            setResponsesData(updateResponses)
            setUserPrompt('')
        } 
        if (inputRef && inputRef.current ) {
            inputRef.current.focus()
        }
    }
    
    return (
        <form>
            <label htmlFor="userPrompt">
                <h3 className="section-title">Enter Prompt</h3>
            </label>
            <textarea
                ref={inputRef}
                id="userPrompt"
                name="userPrompt"
                value={userPrompt}
                autoFocus
                onChange={(e) => setUserPrompt(e.target.value)}
                className="userPrompt"
             />
            <div className="right-align">
                <input
                    type="submit"
                    id="submit"
                    name="submit"
                    onClick={submitPrompt}
                    className="submit-btn"
                 />
             </div>
        </form>
    )
}

export default Prompt