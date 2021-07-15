import Browser from '../Browser/Browser'
import styles from './Profile.module.css'

import React from 'react'
import Paper from '@material-ui/core/Paper'
import Image from 'next/image'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

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
  const [expanded, setExpanded] = React.useState('');

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
          <div className={styles.comments}>
            約半年間研修で社会人の基礎や開発のノウハウを学びました。<br />
            課に配属後は、展示会に出展する簡単なWebアプリケーションの開発をお願いされ、<br />
            先輩方の力を借りつつ無事完成させることができました。(社会人初仕事🎉)<br />
         </div>
       </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className={styles.title}>2年目</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.comments}>
            <div className={styles.shokurekiTitle}>
              <span className={styles.spotlight_light}>①既存顧客の基幹システムのマイグレーションプロジェクト</span><br />
            </div>
            　「VB6」から「VB.NET」,「C#」へのマイグレーション作業で、とにかく本数と不具合が多く、<br />
            当時の自分にとっては非常に厄介で苦労したプロジェクトでした。
            <span className={styles.small}>（今思えばそんな大したことなかったかも）</span><br />
            本プロジェクトでは、要件定義から設計書の作成、開発、テストまでを一貫して経験しました。<br /><br />
            <div className={styles.shokurekiTitle}>
              <span className={styles.spotlight_light}>②Web基幹システムの開発プロジェクト</span><br />
            </div>
            　Java, JavaScript を用いたweb基幹システムの開発案件にプログラマーとして参画しました。<br />
            初の本格Web案件でウキウキだったのですが、大炎上してしまいヒーヒー言いながら開発していました。。<br />
            そんな中、本案件のTOP3に入るほどの開発難易度と言われた在庫更新プログラムの開発を担当しました。(誇)
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className={styles.title}>3年目</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.comments}>
            <div className={styles.shokurekiTitle}>
              <span className={styles.spotlight_light}>①既存顧客の基幹システムのマイグレーションプロジェクト No2</span><br />
            </div>
            　前年とは異なるお客様の基幹システムのマイグレーション作業を行いました。<br />
            前年の経験と、炎上案件の経験もありますが、バッチ処理を用いた単純作業の自動化を行ったため、もの凄いスピードで作業が進み、
            想定していたスケジュールを大幅に短縮させることができました。<br />
            その成果が評価され、毎期末に選ばれる優秀エンジニア賞を受賞しました。<span className={styles.small}>（そんな大した賞ではありません...）</span><br />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className={styles.title}>4年目</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.comments}>
            <div className={styles.shokurekiTitle}>
              <span className={styles.spotlight_light}>①Web基幹システムの開発プロジェクト No2</span><br />
            </div>
            　Web案件ですが、少し変わった言語を使用したWeb基幹システムの開発案件にプログラマーとして参画しました。<br />
            こちらはとにかくタイトなスケジュールが組まれており、周りからは炎上案件認定されていました。。<br />
            初めての言語であったため、初めは開発スピードが遅かったのですが、マニュアルや既存コードを読み漁り、怒涛の追い上げをみせ、
            無事納期までに全画面(自分が担当したのは20本ほど)を開発することができました。<br />
            そのおかげで、二度目の優秀エンジニア賞を受賞することができました 笑。<span className={styles.small}>（何度も言いますが、そんな大した賞ではありません...）</span><br />
          </div>
        </AccordionDetails>
      </Accordion>
      {!expanded ?
        <div className={styles.comments}>
          <br />
          ※注意<br />
          職歴は、長期プロジェクトのみ記載しております。<br />
          比較的規模の小さな案件に関しては記述しておりません。<br />
          また、会社が特定されそうな記述に関しては、抽象的な表現を使用させていただいております。<br />
        </div>
      :
        ''
      }
    </div>
  )
}

function ZikoPR() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    chosho: true,
    tansho: true,
    message: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={styles.zikopr}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.chosho}
                    onChange={handleChange}
                    name="chosho"
                    color="primary"
                  />
                }
                label="長所"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.tansho}
                    onChange={handleChange}
                    name="tansho"
                    color="primary"
                  />
                }
                label="短所"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.message}
                    onChange={handleChange}
                    name="message"
                    color="primary"
                  />
                }
                label="メッセージ"
              />
            </FormGroup>
          </Grid>
          {state.chosho ? 
            <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={styles.pr}>
                <div className={styles.pr_title}>
                  長所
                </div>
                <div className={`${styles.pr_body} ${styles.nocenter}`}>
                  <span className={styles.spotlight_light}>①フットワークが軽い</span><br />
                  　興味のあることは積極的に学んだり行動するところ<br />
                  　やると決めたことは達成するまで努力するところ<br />
                  <span className={styles.spotlight_light}>②責任感が強く、粘り強い</span><br />
                  　頼まれたことは、たとえ泥臭くてでも達成するところ
                  </div>
                </div>
              </Paper>
            </Grid>
          : 
            ''
          }
          {state.tansho ?
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <div className={styles.pr}>
                  <div className={styles.pr_title}>
                    短所
                  </div>
                  <div className={`${styles.pr_body} ${styles.nocenter}`}>
                  <span className={styles.spotlight_light}>①マイペース</span><br />
                  　1つの作業に意識が集中しすぎてしまうところ<br />
                  <span className={styles.spotlight_light}>②口下手</span><br />
                  　自分が喋っている途中に、話の矛盾点や説明不足などに気づいて焦ってしまうところ（話すスピードが早いのもある）
                  </div>
                </div>
              </Paper>
            </Grid>
          :
            ''
          }
          {state.message ?
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={styles.pr}>
                  <div className={styles.pr_title}>
                    メッセージ
                  </div>
                  <div className={`${styles.pr_body} ${styles.nocenter}`}>
                    コードを書くのが好きな方なので、趣味で掲示板やテトリスを作ったり、業務で困っている同期を助けるアプリやバッチプログラムを作ったりしています。（お代は昼飯）<br />
                    正直なところ、Webサイトの構築等はほとんどが独学ですので、Web業界で即戦力になれるかは不安なところはあります。<br />
                    しかし、この先Webエンジニアとして生きていくため、貪欲で知識を吸収して1日でも早く即戦力になります🔥
                  </div>
                </div>
              </Paper>
            </Grid>
          :
            ''
          }
        </Grid>
      </div>
    </div>
  )
}

function Skills() {
  const classes = useStyles();

  return (
    <div className={styles.zikopr}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={styles.pr}>
                <div className={styles.pr_title}>
                  業務で使用する（した）技術
                </div>
                <div className={`${styles.pr_body} ${styles.nocenter}`}>
                  ・VB.NET<br />
                  ・C#<br />
                  ・Java<br />
                  ・JavaScript<br />
                  ・Python（API連携する程度）<br />
                  ・Oracle<br />
                  ・SQL Server<br />
                  ・PostgreSQL<br />
                  ・Linux（Ubuntu）<br />
                  <br />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={styles.pr}>
                <div className={styles.pr_title}>
                  趣味で学んだ/使用した技術
                </div>
                <div className={`${styles.pr_body} ${styles.nocenter}`}>
                  ・C#<br />
                  ・Java<br />
                  ・JavaScript<br />
                  ・Node.JS<br />
                  ・Ruby（Rails）<br />
                  ・PHP（2年ほど触っていませんが。。）<br />
                  ・Linux（Ubuntu, CentOS）<br />
                  ・PostgreSQL<br />
                  ・MySQL<br />
                  ・VirualBox, VM Ware
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={styles.pr}>
                <div className={styles.pr_title}>
                  技術系保有資格
                </div>
                <div className={`${styles.pr_body} ${styles.nocenter}`}>
                  ・Comp TIA Colud+  <span className={styles.small}>（だけです...）</span>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default function Profile ( props ) {
  const title = 'Profile'
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  return (
    <div>
      <Browser title={title} closeAction={props.closeAction}>
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
            <Tab label={<span className={styles.tab}>スキル</span>} />
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
        <TabPanel value={value} index={3}>
          <Skills />
        </TabPanel>
      </Browser>
    </div>
  )
}