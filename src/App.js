import React from 'react';
import './App.scss';
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';


function App() {

  const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

const WrapperDiv=styled.div`width:100%;height:100%;`;


    
    
  return (
    <div className="App">
      <h1>TEST TITLE</h1>
      <h2>Animals</h2>
      <Grid
  textAlign="center"
  style={{ height: "100vh", width: "80%", margin: "0 auto", marginTop: "40px" }}
  verticalAlign="middle"
>
  <Form>
    <Form.Group widths="equal">
      <Form.Field
        id="form-input-control-first-name"
        control={Input}
        label="First name"
        placeholder="First name"
      />
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Last name"
        placeholder="Last name"
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: "Gender", htmlFor: "form-select-control-gender" }}
        placeholder="Gender"
        search
        searchInput={{ id: "form-select-control-gender" }}
      />
    </Form.Group>
    <Form.Field
      id="form-textarea-control-opinion"
      control={TextArea}
      label="Opinion"
      placeholder="Opinion"
    />
    <Form.Field
      id="form-button-control-public"
      control={Button}
      content="Confirm"
      label="Label with htmlFor"
    />
  </Form>
</Grid>

    </div>
  );
}

export default App;
