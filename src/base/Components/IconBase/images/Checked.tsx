import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref} {...props}>
        <rect
            width={18.667}
            height={18.667}
            x={0.667}
            y={0.667}
            fill="#F4600C"
            stroke="#F4600C"
            strokeWidth={1.333}
            rx={3.333}
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
