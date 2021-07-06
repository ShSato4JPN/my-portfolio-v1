import Browser from '../Browser/Browser'
import styles from './Profile.module.css'

import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

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
                <span className={styles.spotlight}>S.Hokazono</span>と申します。<br />
                <br />
                2017年に大学を卒業し、就職を機に念願の上京を果たしました。<br />
                現在はシステムエンジニアとしてSIerで働いており、<br />
                日々、パッケージや基幹システムの開発/改修/保守を行っております。<br />
                <br />
                現在は、色々なユーザに触っていただけるサービスの開発に携わりたいと思い<br />
                Web系の企業を中心に転職活動を行う準備をしております。( 2021/07 )<br />
                <br />
                趣味はバイクで、天気がいい日はよくツーリングに行きます！
              </p>
            </div><br />
      </header>
      <div className={styles.profile_body}>
      </div>
    </div>
  )
}



function Shokureki() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className={styles.title}>1年目</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            約半年間研修で社会人の基礎や開発のノウハウを学びました。<br />
            研修中の成績が良かったことから、展示会に出展する簡単なWebアプリケーションの開発をお願いされ、<br />
            先輩方の力を借りつつ無事完成させることができました。(社会人初仕事！)<br />
            その他は、雑務や先輩のお手伝いをしながら OJT で基本的な業務を学びました。<br />
          </Typography>
       </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className={styles.title}>2年目</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2年目には、大きな案件を2つ経験しました。<br />
            <div></div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className={styles.title}>3年目</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className={styles.title}>4年目</div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

function ZikoPR() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid>
            <Paper>
              <h1>test</h1>
            </Paper>
          </Grid>
          <Grid>
            <Paper>
              <h1>test</h1>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
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
          <Shokureki />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ZikoPR />
        </TabPanel>
      </Browser>
    </div>
  )
}