import PreventPullDownRefresh from './PreventPullDownRefresh';
import ScrollContainer from './ScrollContainer';
import ToManyContent from './ToManyContent';
import './App.css';

function App() {
  return (
    <div className="app">
      
      <ScrollContainer height={500}>

        <ToManyContent />
        
        <div style={{ display: 'inline-block', width: '150px', float: 'left'}}>
          <PreventPullDownRefresh>
            <ScrollContainer height={300}>  
              <ToManyContent />
            </ScrollContainer>
          </PreventPullDownRefresh>
        </div>

        <div style={{ display: 'inline-block', width: '150px', float: 'right'}}>
          <ScrollContainer height={300}>
            <ToManyContent />
          </ScrollContainer>
        </div>
        
        <ToManyContent />

      </ScrollContainer>

    </div>
  );
}

export default App;
