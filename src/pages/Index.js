import React, { Component } from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

class Index extends Component {
    render() {
        return (
            <div>
            <Header />
            <h2 >
              <i className="circular teal users icon" />
              About Find My Owner
            </h2>
            <Footer/>
          </div>
        )
    }

}
  
  export default Index