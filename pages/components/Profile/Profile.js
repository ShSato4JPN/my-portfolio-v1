import Browser from '../Browser/Browser'
import styles from './Profile.module.css'

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Profile ( props ) {
  const title = 'Profile'
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Browser title={title}>
        <Paper>
           <Tabs
            className={styles.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="blue"
            centered
          >
            <Tab label={<span className={styles.tab}>自己紹介</span>} />
            <Tab label={<span className={styles.tab}>職歴</span>} />
            <Tab label={<span className={styles.tab}>自己PR</span>} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <h1>hello</h1>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Browser>
    </div>
  )
}