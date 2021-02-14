import { ReactElement } from "react";
import LinesEllipsis from 'react-lines-ellipsis/lib/html';

export default function TruncatedHtml({content, maxLine = 5}: {content: string; maxLine?: number}): ReactElement {
    return  <LinesEllipsis maxLine={maxLine} unsafeHTML={content} />
}
