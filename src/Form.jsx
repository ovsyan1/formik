import React from 'react';
import { useFormik  } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'required input!'
    }else if(values.name.length < 2){
        errors.name = 'minimum two simbols!'
    }

    if(!values.email){
        errors.email = 'required input!'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.name = 'incorrect email'
    }
    return errors;
}


const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false,
        },
        validate,
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    });
    
    return (
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Send you money</h2>
            <label htmlFor="name">Your name</label>
            <input 
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && <div>{formik.errors.name}</div>}
            <label htmlFor="email">Your email</label>
            <input 
                id="email"
                name="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            {formik.errors.email && formik.touched.name && <div>{formik.errors.email}</div>}
            <label htmlFor="amount">Amount</label>
            <input 
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            <label htmlFor="currency">Currency</label>
            <select 
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="">Choose currency</option>   
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </select>
                <label htmlFor="text">Your message</label>
                <textarea 
                    id="text"
                    name="text"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label>
                    <input 
                        name="terms"
                        type="checkbox"
                        value={formik.values.terms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}                
                    />
                    Are you agree with our politic?
                </label>
                <button type="submit">Send</button>
        </form>
    )
}

export default Form;