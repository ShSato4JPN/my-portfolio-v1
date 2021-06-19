import layout from './ProfileItem.module.css'

export default function ProfileItem ( props ) {
  // const datas = props.data.split(',')
  // let elm = <ul>
  // datas.map( (item) => {
  //   elm = 
  // })

  return (
    <div className={layout.profileitem}>
      <div className={layout.profileItem_header}>
        <div className={layout.profileItem_header_title}>
          {props.title}
        </div>
      </div>
      <div className={layout.profileItem_body}>
        {props.data}
      </div>
    </div>
  )
}