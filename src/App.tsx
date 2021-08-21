import { useEffect } from 'react';
import One from './components/One/One';
import Other from './components/Other/Other';
import Provider from './context/theme/Provider';


function App() {

  useEffect(() => {
    console.log('App');
  },[])

  return (
    <>
      <div>App</div>
      <Provider>
        <One />
        <Other />
      </Provider>
    </>
  );
}

export default App;
