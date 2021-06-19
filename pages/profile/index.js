/**
 * Profile ページを呼び出します。
 * @returns Profile情報
 */
 import layout from './Profile.module.css'
 import Browser from '../components/Browser/Browser'
 import Image from 'next/image'

 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import Paper from '@material-ui/core/Paper';
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                test
              </Grid>
              <Grid item xs={6}>
                test1
              </Grid>
              <Grid item xs={6}>
                test2
              </Grid>
              <Grid item xs={12}>
                test3
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={`${layout.profile_bottom} ${layout.profile_elem}`}>bottom</div>
      </div>
    </Browser>
  )
}