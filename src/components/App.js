import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  ThemeProvider,
  Icon,
} from '@ui5/webcomponents-react';
import ReactCard from '../components/common/ReactCard';
import React, { useState } from 'react';
import UI5BarChart from '../components/common/UI5BarChart';
import UI5LineChart from '../components/common/UI5LineChart';
import '../styles/App.css';
import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';

const App = () => {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const handleOnClick = () => {
    if (toggleCharts === "lineChart") {
      setTimeout(() => {
        setToggleCharts("barChart");
      });
    } else {
      setTimeout(() => {
        setToggleCharts("lineChart");
      });
    }
  }
  const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';

  return (
    <ThemeProvider>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      >
        <FlexBox
          style={{ width: '100%', height: '20vh' }}
          direction={FlexBoxDirection.Row}
          justifyContent={FlexBoxJustifyContent.start}
          alignItems={FlexBoxAlignItems.End}
        >
          <ReactCard
            handleClick={handleOnClick}
            header="Stock Price"
            subHeadding={`Click here to switch to ${switchToChart}`}
            avatar={<Icon name={toggleCharts === "lineChart" ? "line-chart" : "horizontal-bar-chart"} />}
            children={toggleCharts === 'lineChart' ? <UI5LineChart /> : <UI5BarChart />}
          />
        </FlexBox>
          {/* This flexbox behavior kinda sus */}
          <Link href="https://sap.github.io/ui5-webcomponents-react/" target="_blank" design={LinkDesign.Emphasized}>
            Getting Started with UI5 Web Component for React
        </Link>
        </FlexBox>
    </ThemeProvider>
  );
}

export default App;
