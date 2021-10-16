import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const ManageColdRoomAndItsProbes = () => {
    return (
        <section className="col-md-7 col-lg-4">
            <div className="container-fluid rounded bg-dark p-2 mb-3">
                <h3 className="text-white">Gérer une chambre froid et ses sondes </h3>
            </div>

            <Formik initialValues={{officine:'', room:''}} onSubmit={values => console.log(values)}>
                {({errors, touched })=>(
                    <Form className='card p-3' >
                        <div className='mb-3'>
                            <Field className='form-select' as="select" name="officine">
                                <option value="marque">marque</option>
                                <option value="olivier">olivier</option>
                            </Field>
                        </div>
                        <div className='mb-3'>
                            <Field className='form-select' as="select" name="room">
                                <option value="alfa">alfa</option>
                                <option value="alfa">olivier</option>
                            </Field>
                        </div>
                        <button className=" btn btn-primary" type="submit">Valider</button>

                    </Form>
                )}

            </Formik>
        </section>
    );
};

export default ManageColdRoomAndItsProbes;