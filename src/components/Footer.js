import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
class Footer extends Component {
  render() {
    return <div style={{zIndex:-400}}>
      <Card>
        <Card.Header>Copyright © 2021 Gedygroup LLC - All Rights Reserved.</Card.Header>        
      </Card>
    </div>
  }
}
export default Footer
