import { SisenseContextProvider } from '@sisense/sdk-ui';
import MuiBarChart from './mui/MuiBarChart.tsx';
import MuiHybridChart from './mui/MuiHybridChart.tsx';
import PlotlyBasicLinePlot from './plotly/PlotlyBasicLinePlot.tsx';

function App() {
  const {
    VITE_APP_SISENSE_URL,
    VITE_APP_SISENSE_TOKEN,
  } = import.meta.env;

  return (
    <>
      <SisenseContextProvider
        url={VITE_APP_SISENSE_URL}
        token={VITE_APP_SISENSE_TOKEN}
      >
        <PlotlyBasicLinePlot />
        <MuiBarChart />
        <MuiHybridChart />
      </SisenseContextProvider>
    </>
  );
}

export default App;
