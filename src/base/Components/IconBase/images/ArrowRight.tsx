import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref} {...props}>
        <path
            fill="#F4600C"
            fillRule="evenodd"
            d="M10.362 4.529c.26-.26.682-.26.943 0l5 5c.26.26.26.682 0 .942l-5 5a.667.667 0 1 1-.943-.942l3.862-3.862H4.167a.667.667 0 0 1 0-1.334h10.057l-3.862-3.862a.667.667 0 0 1 0-.942Z"
            clipRule="evenodd"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
