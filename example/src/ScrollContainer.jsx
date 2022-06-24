export default function ScrollContainer({ height, children }) {
	return (
		<div className="scroll-container" style={{ height, overflowY: 'scroll', padding: 10, border: '2px dashed #f0c' }}>
			{children}
		</div>
	)
}