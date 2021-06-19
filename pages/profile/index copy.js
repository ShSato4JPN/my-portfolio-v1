import layout from './Profile.module.css'
import Browser from '../components/Browser/Browser'
import Image from 'next/image'

/**
 * Profile ページを呼び出します。
 * @returns Profile情報
 */
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
          <div className={`${layout.profile_top_right} ${layout.profile_top_elem}`}>right</div>
        </div>
        <div className={`${layout.profile_bottom} ${layout.profile_elem}`}>bottom</div>
      </div>
    </Browser>
  )
}