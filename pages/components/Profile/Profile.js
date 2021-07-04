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
                  就職を機に上京し早4年が経ち、東京にも大分慣れてきた<br />
                  <span className={styles.myname}>S.Hokazono</span>と申します。<br />
                  <br />
                  大学からプログラミングを始め、<br />
                  特に画像処理系のプログラムを書くのが得意でした。<br />
                  コードを組むのは好きで、JavaScript をメインに色々とお勉強しております。<br />
                  (GitHub の更新頻度は高くないですが。。。)<br />
                  <br />
                  現職では、Java, VB.NET, C# 等を用いた基幹システム<br />
                  JavaScriptやニッチな言語を用いた、webシステムの開発/保守を行っております。<br />
                  また、SQLは Oracle, SQL Server を主に使用しております。<br />
                  <br />
                  趣味はバイクで、夜な夜な東京の街を走り回っています！
                </p>
              </div>
            </header>
            <div className={styles.profile_body}>

            </div>
          </div>
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