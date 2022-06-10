import axios from 'axios';
import React from 'react'
 
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        address: '',
        district: '',
        sub_district: '',
        city: '',
        post_code: '',
        ident_id: '',
        company_name: '',
        company_address: '',
        duration: '',
        position: ''
    };
  }
 
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };
 
  handleSubmit = (event) => {
      event.preventDefault();

      const { first_name, last_name, phone_number, email, address, district, sub_district, city, post_code, ident_id, company_name, company_address, duration, position} = this.state;

      const data = {
        first_name,
        last_name, 
        phone_number,
        email,
        address,
        district,
        sub_district,
        city,
        post_code,
        ident_id,
        company_name,
        company_address,
        duration,
        position
      }

      console.log(this.state);
    alert('A form was submitted: ' + this.state);
 
    axios
    .post('http://localhost:5000/store-data', data)
    
}
 
  render() {
    return (
      <form action="/store-data" method='POST' onSubmit={this.handleSubmit} style={{textAlign: 'center', margin: 50}}>
        <h1>COMPANY FORM FILLING</h1>
        <div style={{margin: 20}}>
          <label>
            Firstname :  
            <input type="text" value={this.state.value} name="first_name" onChange={this.handleChange}  style={{marginLeft: 20}} />
          </label>
          <br />
          </div>
        <div style={{margin: 20}}>
          <label>
            Lastname :  
            <input type="text" value={this.state.value} name="last_name" onChange={this.handleChange} style={{marginLeft: 20}} />
          </label>
          <br />
        </div>

        <div style={{margin: 20}}>
          <label>
            Phone Number :  
            <input type="text" value={this.state.value} name="phone_number" onChange={this.handleChange} style={{marginLeft: 20}} />
          </label>
          <br />
        </div>

        <div style={{margin: 20}}>
        <label>
          Email :  
          <input type="text" value={this.state.value} name="email" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <div style={{margin: 20}}>
        <label>
          Address :  
          <input type="text" value={this.state.value} name="address" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <div>
        <label>
          District :  
          <input type="text" value={this.state.value} name="district" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <div style={{margin: 20}}>
        <label>
          Sub_District :  
          <input type="text" value={this.state.value} name="sub_district" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <div style={{margin: 20}}>
        <label>
          City :  
          <input type="text" value={this.state.value} name="city" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <div style={{margin: 20}}>
        <label>
          Postal Code :  
          <input type="text" value={this.state.value} name="post_code" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>


        <div style={{margin: 20}}>
        <label>
          Company Name :  
          <input type="text" value={this.state.value} name="company_name" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <div>
        <label>
          Company Address :  
          <input type="text" value={this.state.value} name="company_address" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <div style={{margin: 20}}>
        <label>
          Identity ID :  
          <input type="text" value={this.state.value} name="ident_id" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <div style={{margin: 20}}>
        <label>
          Working Duration :  
          <input type="text" value={this.state.value} name="duration" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>


        <div style={{margin: 20}}>
        <label>
          Position :  
          <input type="text" value={this.state.value} name="position" onChange={this.handleChange} style={{marginLeft: 20}} />
        </label>
        <br />
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default MyForm;