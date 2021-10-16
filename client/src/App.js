

import Layout from "./component /Lyaout/Layout";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ImportProbeData from "./component /ImportProbeData/ImportProbeData";
import Login from "./component /Login/Login";
import Account from "./component /Account/Account";
import UserManagement from "./pages/UserManagement";
import useToken from "./hooks/useToken";
import {AuthContextProvider} from "./Context/Auth";

function App() {
    const {  setToken } = useToken();
    const token = sessionStorage.getItem('token')
    if (!token){
        return <Login token={token} setToken={setToken}/>
    }

  return (
    <div className="container-fluid">
        <BrowserRouter>
            <AuthContextProvider>
            <Layout>
                <Switch>

                    <Route path="/management-user">
                        <UserManagement/>
                    </Route>
                    <Route path="/import-sonde-data">
                        <ImportProbeData/>
                    </Route>
                    <Route path="/mon-compte">
                        <Account/>
                    </Route>
                </Switch>

            </Layout>
            </AuthContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
