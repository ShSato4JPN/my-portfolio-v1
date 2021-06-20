/**
 * Profile ページを呼び出します。
 * @returns Profile情報
 */
 import layout from './Profile.module.css'
 import Browser from '../components/Browser/Browser'
 import ProfileItem from '../components/ProfileItem/ProfileItem'

 import Image from 'next/image'
 import Grid from '@material-ui/core/Grid';
 
export default function Profile () {
  return (
    <Browser title="Profile">
      <div className={layout.profile}>
        <div className={`${layout.profile_top} ${layout.profile_elem}`}>
          <div className={`${layout.profile_top_left} ${layout.profile_top_elem}`}>
            <Image
              src="/profile_image.png"
              height={290}
              width={300}
              alt="Profile Image"
            />
          </div>
          <div className={`${layout.profile_top_right} ${layout.profile_top_elem}`}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <div>
                  <ProfileItem title="名前" data="S.Hokazono" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <ProfileItem title="生年月日" data="1994/12/21" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <ProfileItem title="性別" data="男" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <ProfileItem title="住所" data="東京都 大田区" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <ProfileItem title="趣味" data="ツーリング (XSR900 に乗っています)\nゲーム (最近はパズルゲームにハマり気味)" />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={`${layout.profile_bottom} ${layout.profile_elem}`}>
          <div className={layout.profile_bottom_head}>
            歴史 (社会人)
          </div>
          <div className={layout.profile_bottom_body}>
            <div className={layout.profile_bottom_body_left}>
              <table>
                <tbody>
                  <tr>
                    <td>2017　</td>
                    <td>就職を機に念願の上京を果たす。</td>
                  </tr>
                  <tr>
                    <td>2018　</td>
                    <td>とにかく色々な業務に従事する。</td>
                  </tr>
                  <tr>
                    <td>2019　</td>
                    <td>転職を始めた直後、右足を骨折し中断する。</td>
                  </tr>
                  <tr>
                    <td>2020　</td>
                    <td>大型二輪の免許を取得し、バイクを購入する。</td>
                  </tr>
                  <tr>
                    <td>2021　</td>
                    <td>5月から再度転職活動を始める。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={layout.profile_bottom_body_right}>
              ポートフォリオ用に作成したサイトです。<br />
              もともとは、rails で作る予定でしたが、<br />
              仮想DOM というワードに惹かれ、Next.js での作成を<br />
              試みました。<br />
              初めて使用するため、至らない点がたくさんあると思われますが、
              温かい目で見ていただけると幸いです...。
            </div>
          </div>
        </div>
      </div>
    </Browser>
  )
}