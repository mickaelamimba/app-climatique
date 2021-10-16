import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from "axios";

const ImportProbeData = () => {
    const[file, setFile]=useState({})
    const handleSubmit = (values)=>{
        let data = new FormData();
        data.append('probe',file)
        data.append('Temperature',values.probeType)


       return axios.post('/import-sonde', data,{
         header:  new Headers({
             Accept:"application/json",
             "Content-Type": "multipart/form-data"
         })
       }).then(r => console.log(r)).catch(r => console.log(r))

    }
    return (
        <section>
            <h1>Importer données sonde </h1>
            <Formik initialValues={{probeType:'', probe: []}} onSubmit={handleSubmit}>
                {({errors, touched,isSubmitting,setFieldValue })=>(
                    <Form className='card p-3' >
                        <div>
                            <input  type="file" className='form-control' name="probe" onChange={(e)=>{
                                setFieldValue('probe',setFile(e.target.files[0]))
                            }} />
                            <ErrorMessage className='text-danger' name="probe" component="p" />
                            
                        </div>
                        <fieldset role='group'>
                            <legend>Type de sonde</legend>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="Temperature">
                                    <Field className="form-check-input" type="radio" id="Temperature" name="probeType" value="Temperature" />
                                    Temperature
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="Hygrometry" >
                                    <Field className="form-check-input" type="radio"  id="Hygrometry" name="probeType" value="Hygrometry" />
                                    Hygrométrie
                                </label>
                            </div>
                        </fieldset>


                        <button className=" btn btn-primary" type="submit"  disabled={isSubmitting}>Importer</button>
                    </Form>

                )}

            </Formik>

        </section>
    );
};

export default ImportProbeData;