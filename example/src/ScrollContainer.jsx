import { forwardRef } from 'react';

export default forwardRef(
	function ScrollContainer({ height, children }, ref) {
		return (
			<div ref={ref} className="scroll-container" style={{ height, overflowY: 'scroll', padding: 10, border: '2px dashed #f0c' }}>
				{children}
			</div>
		)
	}
)