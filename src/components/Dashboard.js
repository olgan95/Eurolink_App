import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarDays,
    faDollarSign,
    faCircleQuestion,
    faSackDollar,
    faHammer,
    faPersonCirclePlus,
    faComments
} from '@fortawesome/free-solid-svg-icons'
import {Link, Navigate} from "react-router-dom";

function Dashboard(props) {
    if (!props.authenticated) {
        return <Navigate replace to="/" />;
    } else {
        return (
            <div className="dashboard">

                <div className="dashboard_container dashboard_container_highlight_mobile">
                    <Link to="/Dashboard/PaskiWypłat">
                        <div className="dashboard_item dashboard_item_highlight">
                            <FontAwesomeIcon icon={faDollarSign} className="dashboard_item_icon dashboard_item_icon_highlight"/>
                            <h4>Paski Wypłat</h4>
                        </div>
                    </Link>
                    <Link to="/Dashboard/PolecPracownika">
                        <div className="dashboard_item dashboard_item_highlight">
                            <FontAwesomeIcon icon={faPersonCirclePlus} className="dashboard_item_icon dashboard_item_icon_highlight"/>
                            <h4>Poleć Pracownika</h4>
                        </div>
                    </Link>
                    <Link to="/Dashboard/ZarabiajWiecej">
                        <div className="dashboard_item dashboard_item_highlight">
                            <FontAwesomeIcon icon={faSackDollar} className="dashboard_item_icon dashboard_item_icon_highlight"/>
                            <h4>Jak zarabiać więcej</h4>
                        </div>
                    </Link>
                </div>

                <div className="dashboard_container">
                    <Link to="/Dashboard/Urlop">
                        <div className="dashboard_item">
                            <FontAwesomeIcon icon={faCalendarDays} className="dashboard_item_icon"/>
                            <h4>Zgłoś Urlop</h4>
                        </div>
                    </Link>
                    <Link to="/Dashboard/Kontakt">
                        <div className="dashboard_item">
                            <FontAwesomeIcon icon={faComments} className="dashboard_item_icon"/>
                            <h4>Skontaktuj się z koordynatorem</h4>
                        </div>
                    </Link>
                    <Link to="/Dashboard/Awaria">
                        <div className="dashboard_item">
                            <FontAwesomeIcon icon={faHammer} className="dashboard_item_icon"/>
                            <h4>Zgłoś awarię na mieszkaniu</h4>
                        </div>
                    </Link>
                </div>

                <div className="dashboard_container dashboard_container_highlight">
                    <Link to="/Dashboard/PaskiWypłat">
                        <div className="dashboard_item dashboard_item_highlight">
                            <FontAwesomeIcon icon={faDollarSign} className="dashboard_item_icon dashboard_item_icon_highlight"/>
                            <h4>Paski Wypłat</h4>
                        </div>
                    </Link>
                    <Link to="/Dashboard/PolecPracownika">
                        <div className="dashboard_item dashboard_item_highlight">
                            <FontAwesomeIcon icon={faPersonCirclePlus} className="dashboard_item_icon dashboard_item_icon_highlight"/>
                            <h4>Poleć Pracownika</h4>
                        </div>
                    </Link>
                    <Link to="/Dashboard/ZarabiajWiecej">
                        <div className="dashboard_item dashboard_item_highlight">
                            <FontAwesomeIcon icon={faSackDollar} className="dashboard_item_icon dashboard_item_icon_highlight"/>
                            <h4>Jak zarabiać więcej</h4>
                        </div>
                    </Link>
                </div>

                <div className="dashboard_container dashboard_container_last">
                    <Link to="/Dashboard/InformacjeOMojejPracy">
                        <div className="dashboard_item">
                            <FontAwesomeIcon icon={faCircleQuestion} className="dashboard_item_icon"/>
                            <h4>Informacje o mojej pracy</h4>
                        </div>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Dashboard;