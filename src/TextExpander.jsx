import { useState } from "react"

export default function TextExpander ({children, maxLength=50, buttonText="Show More", collapseButtonText="Show Less", buttonColor, buttonBgColor}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={{background: "lightgray", padding: 15}}>
            <p style={{marginTop: 0}}>
                {expanded ? children : children.substring(0, maxLength) + (children.length > maxLength ? "..." : "")}
            </p>
            <button style={ buttonColor || buttonBgColor ? {color: buttonColor, background: buttonBgColor} : undefined} onClick={() => setExpanded(!expanded)}>{expanded ? collapseButtonText : buttonText}</button>
        </div>
    )
}