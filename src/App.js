import './App.scss';
import Header from './components/Header.js'
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import Kontakt from "./components/Kontakt";
import Awaria from "./components/Awaria";
import Urlop from "./components/Urlop";
import {Routes, Route, useNavigate, HashRouter} from "react-router-dom"
import {useState} from "react";
import InformacjeOMojejPracy from "./components/InformacjeOMojejPracy";
import ZarabiajWiecej from "./components/ZarabiajWiecej";
import PolecPracownika from "./components/PolecPracownika";

function App() {


    const [authenticated, setAuthenticated] = useState(false);
    const [userData, setUserData] = useState({
    });
    let navigate = useNavigate();

    async function authenticate(user){
        setAuthenticated(true)
        setUserData({})
        let pracownik;
        let koordynator;
        let klient

        const result = fetch('http://localhost:3000/pracownicy')
            .then(response => response.json())
            .then(data => {
                pracownik = data.find(person=>
                        (
                            person.email === user.email
                        )
                    )
                return fetch('http://localhost:3000/koordynatorzy')
            })
            .then(response => response.json())
            .then(data => {
                koordynator = data.find(person=>
                            (
                                person.Klient === pracownik.Klient
                            )
                        )
                return fetch('http://localhost:3000/Klienci')
            })
            .then(response => response.json())
            .then(data => {
                klient = data.find(person=>
                            (
                                person.Klient === pracownik.Klient
                            )
                        )
            })
            .catch(error => {
                console.log(error);
            });

        const navigated = result.then(r=>{
            setUserData({
                pracownik: pracownik,
                koordynator: koordynator,
                klient: klient
            })
        })

        navigated.then(navigate("/Dashboard"))
    }

    function logout(){
        setAuthenticated(false)
    }


  return (
    <div className="App">
        <Header
            userData = {userData}
            logout={logout}
            authenticated={authenticated}
        />
        <div className="body_box">
            <HashRouter>
                <Route
                    exact path="/"
                    element={<LogIn
                        authenticate={authenticate}
                    />
                    }/>
                <Route
                    exact path="/Dashboard"
                    element={<Dashboard
                        authenticated={authenticated}
                        userData={userData}
                    />}
                />
                <Route
                    exact path="/Dashboard/Kontakt"
                    element={<Kontakt
                        authenticated={authenticated}
                        userData={userData}
                    />}
                />
                <Route
                    exact path="/Dashboard/Awaria"
                    element={<Awaria
                        authenticated={authenticated}
                        userData={userData}
                    />
                    }
                />
                <Route
                    exact path="/Dashboard/InformacjeOMojejPracy"
                    element={<InformacjeOMojejPracy
                        authenticated={authenticated}
                        userData={userData}
                    />
                    }
                />
                <Route
                    exact path="/Dashboard/Urlop"
                    element={<Urlop
                        authenticated={authenticated}
                        userData={userData}
                    />
                    }
                /><Route
                exact path="/Dashboard/ZarabiajWiecej"
                element={<ZarabiajWiecej
                    authenticated={authenticated}
                    userData={userData}
                />
                }
            /><Route
                exact path="/Dashboard/PolecPracownika"
                element={<PolecPracownika
                    authenticated={authenticated}
                    userData={userData}
                />
                }
            />
            </HashRouter>
        </div>

    </div>
  );
}

export default App;


