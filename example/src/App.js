import { useRef } from 'react';
import PreventPullDownRefresh from './PreventPullDownRefresh';
import ScrollContainer from './ScrollContainer';
import ToManyContent from './ToManyContent';
import './App.css';

function App() {
  const nonScrollableRef = useRef();

  return (
    <div className="app">
      
      <ScrollContainer height={500}>

        <ToManyContent />
        
        <div style={{ display: 'inline-block', width: '150px', float: 'left'}}>
          <PreventPullDownRefresh forwardedRef={nonScrollableRef}>
            <ScrollContainer ref={nonScrollableRef} height={300}>  
              scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me 
            </ScrollContainer>
          </PreventPullDownRefresh>
        </div>

        <div style={{ display: 'inline-block', width: '150px', float: 'right'}}>
          <ScrollContainer height={300}>
            scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me <br/>scroll up me <br/> scroll up me 
          </ScrollContainer>
        </div>
        
        <ToManyContent />

      </ScrollContainer>

    </div>
  );
}

export default App;
