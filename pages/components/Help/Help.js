import Browser from '../Browser/Browser'
import styles from './Help.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    maxWidth: 600,
    height: 100,
  },
  noborder: {
    border: 0,
  }
}));

function createData(cmd, description) {
  return { cmd, description };
}

const rows = [
  createData('show profile (or profile)', 'プロフィール画面を表示します。'),
  createData('show info (or info)', '製作者のメールアドレス等を表示します。'),
  createData('show help (or help)', 'ZONO-TERMINALの説明ページを表示します。'),
  createData('clear (or cls)', 'コンソールをクリアします。'),
];

export default function Help( props ) {
  const classes = useStyles();
  const title = 'Help'

  return (
    <Browser title={title} closeAction={props.closeAction}>
      <div className={styles.wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={styles.about}>
                <div className={styles.about_title}>
                  ZONO-TEMINALについて
                </div>
                <div className={`${styles.about_body} ${styles.nocenter}`}>
                  　自分が今まで見たことないサイトをコンセプトに「ターミナル風」の自己紹介ページを作ってみました。<br />
                  とりあえず作ってみよう！の精神で作成したため、レスポンシブ非対応となっております。（申し訳ございません...）<br />
                  次はレスポンシブ対応した「見やすい」サイトを作成する予定でいます。<br />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={styles.about}>
                <div className={styles.about_title}>
                  コマンドについて
                </div>
                <div className={`${styles.about_body} ${styles.nocenter}`}>
                  <p>　数は少ないですが、当ページはコマンドを入力することでプロフィール画面やデータを表示することができます。<br /></p>
                  <div className={styles.about_cmdlist}>
                    <TableContainer>
                      <Table className={classes.table} aria-label="command description">
                        <TableBody>
                          <TableCell align="center" component="th" scope="row" className={classes.noborder}><span className={`${styles.about}`}>コマンド</span></TableCell>
                          <TableCell align="center" className={classes.noborder}><span className={`${styles.about} ${styles.about_body}`}>内容</span></TableCell>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell align="center" component="th" scope="row" className={classes.noborder}><span className={`${styles.about}`}>{row.cmd}</span></TableCell>
                              <TableCell align="left" className={classes.noborder}><span className={`${styles.about} ${styles.about_body}`}>{row.description}</span></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
   </Browser>  
  )
}