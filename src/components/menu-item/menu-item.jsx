import './menu-item.css'
function MenuItem (props) {
    return (
      <div className="menu-item">
        <model-viewer
          src={props.androidSource}
          ios-src={props.iosSource}
          camera-controls 
          ar
          xr-environment
          alt={props.alternateName}></model-viewer>
          <div className="item-details">{props.alternateName}</div>
      </div>
    );
  }
  
  export default MenuItem;