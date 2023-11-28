import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref} {...props}>
        <path
            fill={'#667085'}
            fillRule="evenodd"
            d="M9.259 7.65a2.7 2.7 0 1 1 5.4 0 2.7 2.7 0 0 1-5.4 0Zm2.7-4.3a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6Zm-2.596 10.6a4.408 4.408 0 0 0-3.114 1.288 4.394 4.394 0 0 0-1.29 3.11v1.794a.808.808 0 0 0 1.617 0v-1.795a2.789 2.789 0 0 1 2.787-2.782h5.191c.739 0 1.448.293 1.97.815a2.78 2.78 0 0 1 .816 1.967v1.795a.808.808 0 0 0 1.619 0v-1.795a4.394 4.394 0 0 0-1.29-3.11 4.408 4.408 0 0 0-3.115-1.287H9.363Z"
            clipRule="evenodd"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo