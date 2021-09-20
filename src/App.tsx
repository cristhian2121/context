import { useEffect } from 'react';
import One from './components/One/One';
import Other from './components/Other/Other';
import Theme from './components/Theme/Theme';
import Provider from './context/theme/Provider';


function App() {

  useEffect(() => {
    console.log('App');
  },[])

  return (
    <>
      <Theme />
    </>
  );
}

export default App;

/* <Provider>
  <One />
  <Other />
</Provider> */