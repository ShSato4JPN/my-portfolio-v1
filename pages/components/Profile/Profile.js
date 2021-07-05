import Browser from '../Browser/Browser'
import styles from './Profile.module.css'

import Image from 'next/image'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

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

function Zikoshokai() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header_left}>
          <Image priority
                 src={'/../public/image/dog.jpg'}
                 className={styles.borderCircle}
                 height={250}
                 width={250}
                 alt='profile image'
                 onClick={() => {alert('ワン')}}
          />
          <h1 className={styles.name}>S.Hokazono</h1>
          </div>
            <div className={styles.header_right}>
              <p className={styles.comments}>
                はじめまして。<br />
                <span className={styles.myname}>S.Hokazono</span>と申します。<br />
                <br />
                2017年に大学を卒業し、就職を機に念願の上京を果たしました。<br />
                現在はシステムエンジニアとしてSIerで働いており、<br />
                日々、パッケージや基幹システムの開発/改修/保守を行っております。<br />
                <br />
                コードを組むのは好きで、<span className={styles.spotlight}>JavaScript</span> をメインに色々とお勉強しております。<br />
                (GitHub の更新頻度は高くないですが。。。)<br />
                <br />
                趣味は<span className={styles.spotlight}>バイク</span>で、天気がいい日はよくツーリングに行きます！
              </p>
            </div><br />
      </header>
      <div className={styles.profile_body}>
      </div>
    </div>
  )
}

export default function Profile () {
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
            textColor="primary"
            centered
          >
            <Tab label={<span className={styles.tab}>自己紹介</span>} />
            <Tab label={<span className={styles.tab}>職歴</span>} />
            <Tab label={<span className={styles.tab}>自己PR</span>} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <Zikoshokai />
        </TabPanel>
        <TabPanel value={value} index={1}>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Browser>
    </div>
  )
}