import Browser from '../Browser/Browser'
import styles from './Help.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Help( props ) {
  const classes = useStyles();
  const title = 'Help'

  return (
    <Browser title={title} closeAction={props.closeAction}>
      <div className={styles.wrapper}>
        <Paper className={classes.paper}>
          <div className={styles.about}>
            <div className={styles.about_title}>
              ZONO-TEMINALについて
            </div>
            <div className={`${styles.about_body} ${styles.nocenter}`}>
              　自分が今まで見たことないようなサイトを作ろうと思い、ターミナル風の自己紹介ページを作ってみました。<br />
              とりあえず作ってみよう！の精神で作成したため、レスポンシブ非対応となっております。（申し訳ございません...）<br />
              近々、レスポンシブ対応した「見やすい」サイト作成する予定でいます。<br />
            </div>
          </div>
        </Paper>
      </div>
   </Browser>  
  )
}