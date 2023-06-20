import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Modalidade from "./pages/modalidade/modalidade";
import Horario from "./pages/horario/horario";
import Contato from "./pages/contato/contato";
import Login from "./pages/login/login";
import Visualizaraluno from "./pages/gerenciaraluno/visualizaraluno";
import Telainicial from "./pages/gerenciaraluno/telainicial";

const Rotas = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/modalidade" component={Modalidade} />
      <Route path="/horario" component={Horario} />
      <Route path="/contato" component={Contato} />
      <Route path="/login" component={Login} />
      <Route path="/telainicial" component={Telainicial} />
    </Switch>
  );
};

export default Rotas;
