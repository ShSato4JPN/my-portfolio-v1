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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div>
                  <ProfileItem title="NAME" data="S.Hokazono" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <ProfileItem title="AGE" data="26" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <ProfileItem title="BLOOD" data="AB" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <ProfileItem title="INTEREST" data="バイク、ゲーム、ネットサーフィン、" />
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