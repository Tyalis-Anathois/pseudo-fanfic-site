import Reader from './components/reader/Reader';
import { GlobalStyle } from './components/theme/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Reader title="Title" text="Lorem ipsum sit amet"/>
    </>
  );
}

export default App;
