import { Button } from '@mui/material'
import React from 'react'
import { Field, formValues, reduxForm } from 'redux-form'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./new.scss"
import { useDispatch } from 'react-redux'
import { addShop } from '../../redux/actions'
import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system'


const New = (props) => {
  let dispatch = useDispatch()
  const navigate = useNavigate();

  // -webkit-box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;
  // box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;


  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div style={{ backgroundColor: '#fff6f6', marginTop: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', color: '#9f3a38', width: '100%', height: '40px', WebkitBoxShadow: "0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent", boxShadow: '0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent' }}>
          <div className='header' style={{ marginLeft: '20px' }}>{error}</div>
        </div>
      )
    }
  }


  const renderInput = ({ input, lable, meta }) => {
    return (
      <div className="field">
        <label>{lable} : </label>
        <div className='input'>
          <input {...input} />
        </div>
        {renderError(meta)}
      </div>
    )
  }

  const renderSelect = ({ input, lable, meta }) => {
    return (
      <div className="field">
        <label>Select the Area :</label>
        <select {...input} className='input' style={{ backgroundColor: "#fff", outline: 'none', border: 'none' }}>
          <option />
          <option value="Thane">Thane</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai Suburban">Mumbai Suburban</option>
          <option value="Nashik">Suburban</option>
          <option value="Ahmednagar">Ahmednagar </option>
          <option value="Nagpur">Nagpur</option>
          <option value="Solapur">Solapur</option>
        </select>
        {renderError(meta)}
      </div>
    )
  }

  const renderSelectCat = ({ input, lable, meta }) => {
    return (
      <div className="field">
        <label>Select the Category :</label>
        <select {...input} className='input' style={{ backgroundColor: "#fff", outline: 'none', border: 'none' }}>
          <option />
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Chemist">Chemist</option>
          <option value="StationeryShop">StationeryShop</option>
        </select>
        {renderError(meta)}
      </div>
    )
  }


  const renderTimeInput = ({ input, lable, meta }) => {
    return (
      <div className="field">
        <label>{lable} : </label>
        <div className='input'>
          <input type="time" {...input} />
        </div>
        {renderError(meta)}
      </div>
    )
  }



  const onSubmit = (fromValues) => {
    console.log(fromValues)
    dispatch(addShop(fromValues))
    navigate('/')
  }


  return (
    <div className='new'>
      <Sidebar />
      <div className='container'>
        <Navbar />
        <div className="newForm">
          <h1 className='title'>Add A Shop</h1>
          <div className='form'>
            <form action='' onSubmit={props.handleSubmit(onSubmit)}>
              <Field name='name' component={renderInput} lable="Enter the Shop Name" />
              <Field name="area" className="input" component={renderSelect} />
              <Field name="category" className="input" component={renderSelectCat} />
              <Field name='openingTime' component={renderTimeInput} lable="Opening Time" />
              <Field name='closingTime' component={renderTimeInput} lable="Closing Time" />
              <button className='btn'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const validate = (fromValues) => {
  const errors = {}
  const re = /^[a-zA-Z ]*$/;
  if (!fromValues.name || !re.test(fromValues.name)) {
    errors.name = 'You must Enter a valid name of the Shop'
  }
  if (!fromValues.area) {
    errors.area = "You must provide the location"
  }
  if (!fromValues.category) {
    errors.category = "You must provide a category"
  }
  if (!fromValues.openingTime) {
    errors.openingTime = "You must provide the Opening Time of the Shop."
  }
  if (!fromValues.closingTime) {
    errors.closingTime = "You must provide the Closing Time of the Shop."
  }

  return errors
}


export default reduxForm({
  form: 'shopCreate',
  validate
})(New)