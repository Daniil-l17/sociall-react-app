import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <h1>привет</h1>
      </MantineProvider>
    </>
  );
}

export default App;
