//import { Histogram as Histogram2 } from '../lib/index';
import { Histogram } from '@stevenwgriffith/more-compose-sdk-charts';
import { filterFactory } from '@sisense/sdk-data';
import { ThemeProvider } from '@sisense/sdk-ui';
import * as DM from './../data-models/sample-ecommerce';

export const HistogramPage = () => {
  const revenueFilter = filterFactory.between(DM.Commerce.Revenue, 0.01, 1000);
  const yearFilter = filterFactory.members(DM.Commerce.Date.Years, ['2012-01-01']);
  return (
    <ThemeProvider theme={{ chart: { backgroundColor: 'white' } }}>
      <>
        <Histogram
          dataSource={DM.DataSource}
          dataOptions={{
            category: [DM.Commerce.AgeRange],
            value: DM.Commerce.Revenue,
          }}
          filters={[revenueFilter, yearFilter]}
          styleOptions={{ legend: { enabled: false }, subtype: 'stacked', height: 800, width: 800 }}
        />
      </>
    </ThemeProvider>
  );
};
