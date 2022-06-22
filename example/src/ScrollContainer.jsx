export default function ScrollContainer({ children }) {
	return (
		<div className="scroll-container" style={{ height: '300px', overflowY: 'scroll', border: '1px solid #f0c' }}>
			{children}
		</div>
	)
}