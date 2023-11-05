import './up.css'
import a from '../../pages/imageHome.jpg';
import b from '../../pages/imageHome.jpg';
import c from '../../pages/imageHome.jpg';
import d from '../../pages/imageHome.jpg';
import e from '../../pages/imageHome.jpg';
import f from '../../pages/imageHome.jpg';



export default function Upcoming(props) {

  return (
    <div className="contthreecontainer idli">
      <div className="contthreebox"><a href="/event/location/India"><img src={a} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou">events</h5><b className='countryname' >India</b></div>
      <div className="contthreebox"><a href="/event/location/Sweden"><img src={b} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> events</h5><b className='countryname' >Sweden</b></div>
      <div className="contthreebox"><a href="/event/location/USA"><img src={c} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou">events</h5><b className='countryname' >Uniteb States</b></div>
      <div className="contthreebox"><a href="/event/location/Russia"><img src={d} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> events</h5><b className='countryname' >Russia</b></div>
      <div className="contthreebox"><a href="/event/location/Australia"><img src={e} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou">  events</h5><b className='countryname' >Australia</b></div>
      <div className="contthreebox"><a href="/event/location/Japan"><img src={f} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou">events</h5><b className='countryname' >Japan</b></div>
    </div>
  )



}