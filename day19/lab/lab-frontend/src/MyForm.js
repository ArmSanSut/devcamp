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
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
 
    fetch('http://localhost:3000/store-data', {
        // method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
 
  render() {
    return (
      <form action="/store-data" method='POST'>
        <label>
          Firstname :  
          <input type="text" value={this.state.value} name="first_name" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Lastname :  
          <input type="text" value={this.state.value} name="last_name" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Phone Number :  
          <input type="text" value={this.state.value} name="phone_number" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email :  
          <input type="text" value={this.state.value} name="email" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Address :  
          <input type="text" value={this.state.value} name="address" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          District :  
          <input type="text" value={this.state.value} name="district" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Sub_District :  
          <input type="text" value={this.state.value} name="sub_district" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          City :  
          <input type="text" value={this.state.value} name="city" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Postal Code :  
          <input type="text" value={this.state.value} name="post_code" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Company Name :  
          <input type="text" value={this.state.value} name="company_name" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Company Address :  
          <input type="text" value={this.state.value} name="company_address" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Identity ID :  
          <input type="text" value={this.state.value} name="ident_id" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Working Duration :  
          <input type="text" value={this.state.value} name="duration" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Position :  
          <input type="text" value={this.state.value} name="position" onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default MyForm;