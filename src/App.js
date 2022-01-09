import "./App.css";
import { Main } from "./main";
import {Test} from './test'
import {Header} from './Header'
import {Footer} from './footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { PriceLisitng } from "./priceLisitng";
import { Finish } from "./finish";
import { CoinComponent } from "./coinComponent";
import { Deal } from "./Deal";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
     <Route path="/" exact component={Main} />
     <Route path="/test" exact component={Test} />
     <Route path="/listpricing" exact component={PriceLisitng} />
     <Route path="/coin/:coinId" exact component={CoinComponent} />
     <Route path="/coin/:coinId/deal" exact component={Deal} />
     <Route path="/coin/:coinId/deal/finish" exact component={Finish} />

      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
