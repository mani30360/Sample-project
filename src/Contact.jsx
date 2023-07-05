import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      successMessage: ''
    };
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validateForm()) {
      // Form submission logic goes here (e.g., API call, etc.)
      console.log('Form submitted successfully!');
      this.setState({
        successMessage: 'Form submitted successfully!',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        errors: {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: ''
        }
      });
    } else {
      console.log('Form has errors. Please fix them.');
      this.setState({ successMessage: '' });
    }
  }

  validateForm() {
    const { firstName, lastName, email, phoneNumber } = this.state;
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    };
    let isValid = true;

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  }

  render() {
    const { firstName, lastName, email, phoneNumber, errors, successMessage } = this.state;

    return (
      <div className="Raju">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div><h1>Contact Form</h1></div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleInputChange.bind(this)}
                  className={errors.firstName ? 'form-control is-invalid' : 'form-control'}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleInputChange.bind(this)}
                  className={errors.lastName ? 'form-control is-invalid' : 'form-control'}
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange.bind(this)}
                  className={errors.email ? 'form-control is-invalid' : 'form-control'}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={this.handleInputChange.bind(this)}
                  className={errors.phoneNumber ? 'form-control is-invalid' : 'form-control'}
                />
                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
              </div>

              {successMessage && <div className="success-message">{successMessage}</div>}

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
