import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref} {...props}>
        <path
            fill="#667085"
            fillRule="evenodd"
            d="M3.623 5.623a.533.533 0 0 1 .754 0L8 9.246l3.623-3.623a.533.533 0 0 1 .754.754l-4 4a.533.533 0 0 1-.754 0l-4-4a.533.533 0 0 1 0-.754Z"
            clipRule="evenodd"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
