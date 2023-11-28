import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref} {...props}>
        <path
            fill={"#667085"}
            fillRule="evenodd"
            d="M6.6 2.2A2.6 2.6 0 0 0 4 4.8v14.4a2.6 2.6 0 0 0 2.6 2.6h10.8a2.6 2.6 0 0 0 2.6-2.6v-1.4a.8.8 0 1 0-1.6 0v1.4a1 1 0 0 1-1 1H6.6a1 1 0 0 1-1-1V4.8a1 1 0 0 1 1-1H13v4.6a.8.8 0 0 0 .8.8h4.6v5a.8.8 0 0 0 1.6 0V8.4a.8.8 0 0 0-.235-.566l-5.4-5.4A.8.8 0 0 0 13.8 2.2H6.6Zm10.668 5.4L14.6 4.93V7.6h2.668ZM8.4 8.5a.8.8 0 1 0 0 1.6h1.8a.8.8 0 1 0 0-1.6H8.4Zm0 3.6a.8.8 0 1 0 0 1.6h7.2a.8.8 0 1 0 0-1.6H8.4Zm0 3.6a.8.8 0 1 0 0 1.6h7.2a.8.8 0 1 0 0-1.6H8.4Z"
            clipRule="evenodd"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
