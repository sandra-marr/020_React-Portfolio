import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import NavBar from './components/Nav';
import Footer from './components/Footer';

import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import WorkPage from './pages/Work';
import ContactPage from './pages/Contact';
import DogDaysPage from './pages/DogDays';
import PDF from './pages/PDF';

export default function Routes() {
  useEffect(() => {
    document.title = "SRM Web";
  });
  return (
    <Container fluid className="main-page scroll">
      <Header />
      <NavBar />
      <div className="p-3 mb-3 mainbckgrnd rounded-bottom ">
        <Switch>
          <Route exact path="/" component={AboutPage}/>
          <Route exact path="/skills" component={SkillsPage}/>
          <Route exact path="/work" component={WorkPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/dogdays" component={DogDaysPage}/>
          <Route exact path="/resume" component={PDF}/>
        </Switch>
      </div> 
      <Footer />
    </Container>
  );
}