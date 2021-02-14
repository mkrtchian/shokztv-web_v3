import { ReactElement } from "react";

/**
 * Removes html tags and &nbsp; spacial characters from the given html string, and truncates it
 * to the given number of letters.
 */
export default function FixedTruncatedHtml({content, numberOfLetters = 180}: {content: string; numberOfLetters?: number}): ReactElement {
    let withoutHTMLTags = content.replace(/(<([^>]+)>)/gi, "");
    let withoutNbsp = withoutHTMLTags.replace(/&nbsp;/g, " ");
    let truncatedContent = withoutNbsp.substring(0, numberOfLetters);
    return <p>{truncatedContent} ...</p>;
}
