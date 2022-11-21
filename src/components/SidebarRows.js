import './sidebarRows.css'


export default function SidebarRows({selected,Icon,title}) {
  return (
    <div className={`sidebarRows ${selected && 'selected'}`}>
     <Icon className="sidebarRows-icon"/>
      <h2 className="sidebarRows-title"> {title}  </h2>
    </div>
  )
}
