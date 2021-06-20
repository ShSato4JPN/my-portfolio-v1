import layout from './ProfileItem.module.css'
import React from 'react'

export default function ProfileItem ( props ) {
  const datas = props.data.split('\\n').map( (d, idx) => {
    return (
      <React.Fragment key={idx}>{d}<br /></React.Fragment>
    )
  })

  return (
    <div className={layout.profileitem}>
      <div className={layout.profileItem_title}>
        {props.title}
      </div>
      <div className={layout.profileItem_body}>
        {datas}
      </div>
    </div>
  )
}