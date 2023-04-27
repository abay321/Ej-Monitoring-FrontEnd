import { Breadcrumb } from "antd";
function Breadcrumbs({title, items}) {
  return (
    <div className="content-header" style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem 0.5rem',
      alignItems:'center'
    }}>
      <h1 style={{
        fontSize: '29px',
        lineHeight: '10px',
        color: '#343a40',
        fontWeight: '400'
      }}>{title}</h1>
      <Breadcrumb
      
        items={items}
      />
    </div>
  );
}

export default Breadcrumbs;
