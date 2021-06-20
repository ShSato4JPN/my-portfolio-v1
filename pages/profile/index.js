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
              height={300}
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
              <Grid item xs={6}>
                <div>
                  <ProfileItem title="生年月日" data="1994/12/21" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <ProfileItem title="性別" data="男" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <ProfileItem title="住所" data="東京都 大田区" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <ProfileItem title="趣味" data="バイク、ゲーム、ネットサーフィン、" />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={`${layout.profile_bottom} ${layout.profile_elem}`}>bottom</div>
      </div>
    </Browser>
  )
}