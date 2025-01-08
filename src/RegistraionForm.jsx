import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'


const RegistraionForm = (userInputData) => {
    const [getData, setData] = useState({
        studentName: '',
        studentAddress: '',
        studentMail: '',
        studentGender: '',
        studentDOB: '',
        studentCourse: ''
    })

    const [isFormValid, setFormValid] = useState(false)

    const validateForm = () => {
        const { studentName, studentAddress, studentMail, studentGender, studentDOB, studentCourse } = getData;
        const isNameValid = studentName.trim() !== "";
        const isAddressValid = studentAddress.trim() !== "";
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(studentMail);
        const isGenderValid = studentGender !== "";
        const isDOBValid = studentDOB !== "";
        const isCourseValid = studentCourse !== "";
        setFormValid(isNameValid && isAddressValid && isEmailValid && isGenderValid && isDOBValid && isCourseValid)
    }

    const handleInputChange = (field, value) => {
        setData((prevData) => {
            const updateData = { ...prevData, [field]: value }
            validateForm()
            return updateData
        })
    }

    const handleSubmit = () => {
        const { studentName, studentAddress, studentMail, studentGender, studentDOB, studentCourse } = getData
        if (studentName, studentAddress, studentMail, studentGender, studentDOB, studentCourse) {
            const alertMessage = `
            Name : ${studentName}
            Address : ${studentAddress}
            E-mail : ${studentMail}
            Gender : ${studentGender}
            Date of Birth : ${studentDOB}
            Course : ${studentCourse}
            `
            alert(alertMessage)
        }
        else {
            alert('Data not Entered Completly')
        }

    }

    const handleCancel = () => {
        setData({
            studentName: "",
            studentAddress: "",
            studentMail: "",
            studentGender: "",
            studentDOB: "",
            studentCourse: "",
        });
        setFormValid(false);
    };



    return (
        <div className='d-flex justify-content-center my-4 '>
            <div style={{ width: '500px' }} className='bg-primary border rounded p-4'>
                {/* Name */}
                <FloatingLabel controlId="floatingName" label="Enter you name">
                    <Form.Control value={getData.studentName} onChange={(e) => handleInputChange("studentName", e.target.value)} type="text" placeholder="name" />
                </FloatingLabel>

                {/* Address */}
                <FloatingLabel controlId="floatingAddress" label="Enter your Address" className='mt-3'>
                    <Form.Control value={getData.studentAddress} onChange={(e) => handleInputChange("studentAddress", e.target.value)}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>

                {/* E-mail */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mt-3"
                >
                    <Form.Control value={getData.studentMail} onChange={(e) => handleInputChange("studentMail", e.target.value)} type="email" placeholder="name@example.com" />
                </FloatingLabel>

                {/* Gender */}
                <Form>
                    <div key="gender-radio-group" className="mt-3 d-flex justify-content-between text-light px-3">
                        <Form.Check
                            type="radio"
                            id="gender-male"
                            name="gender"
                            value="Male"
                            label="Male"
                            checked={getData.studentGender === "Male"}
                            onChange={(e) => handleInputChange("studentGender", e.target.value)}

                        />
                        <Form.Check
                            type="radio"
                            id="gender-female"
                            name="gender"
                            value="Female"
                            label="Female"
                            checked={getData.studentGender === "Female"}
                            onChange={(e) => handleInputChange("studentGender", e.target.value)}

                        />
                        <Form.Check
                            type="radio"
                            id="gender-others"
                            name="gender"
                            value="Others"
                            label="Others"
                            checked={getData.studentGender === "Others"}
                            onChange={(e) => handleInputChange("studentGender", e.target.value)}

                        />
                    </div>
                </Form>

                {/* DOB */}
                <FloatingLabel controlId="floatingDOB" label="Enter your Date of Birth" className='mt-3'>
                    <Form.Control value={getData.studentDOB} onChange={(e) => handleInputChange("studentDOB", e.target.value)}
                        type="date" placeholder="DOB" />
                </FloatingLabel>

                {/* Course */}
                <Form.Select value={getData.studentCourse} onChange={(e) => handleInputChange("studentCourse", e.target.value)}
                    aria-label="Default select example" className='mt-3'>
                    <option hidden>Open this select menu</option>
                    <option value="Biology">Biology</option>
                    <option value="ComputerScience">Computer Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Humanities">Humanities</option>
                </Form.Select>
                <div className='d-flex mt-3 justify-content-center'>
                    <button onClick={handleCancel} className='btn btn-danger border rounded me-2'>Cancel</button>
                    <button onClick={handleSubmit} className='btn btn-success border rounded' disabled={!isFormValid}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default RegistraionForm