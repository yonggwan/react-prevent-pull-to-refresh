import PreventPullDownRefresh from './PreventPullDownRefresh';
import ScrollContainer from './ScrollContainer';
import ToManyContent from './ToManyContent';
import './App.css';

function App() {
  return (
    <div className="app clearboth">
      <div style={{ width: '45%', float: 'left'}}>
        <PreventPullDownRefresh>
          <ScrollContainer>
            <ToManyContent />
          </ScrollContainer>
        </PreventPullDownRefresh>
      </div>
      <div style={{ width: '45%', float: 'right'}}>
        <ScrollContainer>
          <ToManyContent />
        </ScrollContainer>
      </div>
    </div>
  );
}

export default App;
