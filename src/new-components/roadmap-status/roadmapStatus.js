import {Link} from "react-router-dom";
import './styles.css'

export const RoadmapStatus = ({status, className}) => {
    return (
        <div className={`card ${className} `}>
            <div className={'card-body'}>
                <div className={'d-flex flex-row justify-content-between align-items-center'}>
                    <h5 className={'road'}>Roadmap</h5>
                    <Link to={''} className={'view'}>View</Link>
                </div>
                <ul className={'m-0 p-0'}>
                    {
                        status.map((item) => <li className={'d-flex flex-row justify-content-between2'} key={item.id}>
                            <i className={'me-2'}>*</i>
                            <h6 className={'flex-grow-1 ulcontain'}>{item.name}</h6>
                            <span>{item.count}</span>
                        </li>)
                    }
                </ul>
            </div>
        </div>)
}