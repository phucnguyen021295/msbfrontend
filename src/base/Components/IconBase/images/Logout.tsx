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
            d="M5 3.8A1.2 1.2 0 0 0 3.8 5v14A1.2 1.2 0 0 0 5 20.2h4a.8.8 0 1 1 0 1.6H5A2.8 2.8 0 0 1 2.2 19V5A2.8 2.8 0 0 1 5 2.2h4a.8.8 0 1 1 0 1.6H5Zm10.434 2.634a.8.8 0 0 1 1.132 0l5 5a.8.8 0 0 1 0 1.132l-5 5a.8.8 0 1 1-1.132-1.132L19.07 12.8H9a.8.8 0 0 1 0-1.6h10.069l-3.635-3.634a.8.8 0 0 1 0-1.132Z"
            clipRule="evenodd"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
