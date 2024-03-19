import  { useState } from 'react';
import "../../assets/css/ApplyLoan.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container, Card, CardMedia, CardContent,MenuItem, Select, } from '@mui/material';
import jsPDF from 'jspdf';

const ApplyLoans = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = [
    { title: 'Personal Information', fields: ['firstName', 'lastName', 'dateOfBirth', 'gender', 'maritalStatus','mobileNumber', 'email', 'streetAddress', 'streetAddressLine2', 'city', 'state', 'nationality', 'postalCode'] },
    //{ title: 'Former Information', fields: ['farmerMobileNumber', 'farmerEmail', 'farmerStreetAddress', 'farmerStreetAddressLine2', 'farmerCity', 'farmerState', 'farmerNationality', 'farmerPostalCode'] },
    { title: 'Loan Details', fields: ['loanType','loanAmountRequested', 'loanPurpose', 'loanTerm'] },
    { title: 'Credit Information', fields: ['creditScore', 'creditHistory'] },
    { title: 'Co-Applicant Information', fields: ['coApplicantPersonalInfo', 'coApplicantFinancialInfo'] },
    { title: 'Documents to Upload', fields: ['photoID', 'proofOfAddress', 'payStubs', 'employmentVerification', 'bankStatements', 'otherFinancialDocs'] },
    { title: 'Agreements and Disclosures', fields: ['termsConditionsCheckbox', 'loanAgreementParagraph'] },
    { title: 'Submit and Review', fields: ['summary'] },
    { title: 'Confirmation Page', fields: [] },
  ];
  const loanTypes = [
    'Crop Loans',
    'Farm Mechanization Loans',
    'Land Purchase Loans',
    'Livestock Loans',
    'Warehouse Receipt Loans',
    'Solar Pump Set Loan',
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    mobileNumber: '',
    email: '',
    streetAddress: '',
    streetAddressLine2: '',
    city: '',
    state: '',
    nationality: '',
    postalCode: '',
    loanAmountRequested: '',
    loanPurpose: '',
    loanTerm: '',
    creditScore: '',
    creditHistory: '',
    coApplicantPersonalInfo: '',
    coApplicantFinancialInfo: '',
    photoID: '',
    proofOfAddress: '',
    payStubs: '',
    employmentVerification: '',
    bankStatements: '',
    otherFinancialDocs: '',
    termsConditionsCheckbox: false,
    loanAgreementParagraph: '',
    summary: '',
  });
  

  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
  
    // if (!formData.firstName.trim()) {
    //   newErrors.firstName = 'First Name is required';
    // }
  
    // if (!formData.lastName.trim()) {
    //   newErrors.lastName = 'Last Name is required';
    // }
  
    // if (!formData.dateOfBirth.trim()) {
    //   newErrors.dateOfBirth = 'Date of Birth is required';
    // }
  
    // if (!formData.gender) {
    //   newErrors.gender = 'Gender is required';
    // }
  
    // if (!formData.maritalStatus) {
    //   newErrors.maritalStatus = 'Marital Status is required';
    // }
  
    // const emailRegex = /^\S+@\S+\.\S+$/;
    // if (!formData.email.trim() || !emailRegex.test(formData.email)) {
    //   newErrors.email = 'Invalid Email';
    // }
  
    // const phoneRegex = /^\d{10}$/;
    // if (!formData.mobileNumber.trim() || !phoneRegex.test(formData.mobileNumber)) {
    //   newErrors.mobileNumber = 'Invalid Phone Number';
    // }
    
    if (!formData.termsConditionsCheckbox) {
      newErrors.termsConditionsCheckbox = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    // if (validateForm()) {
      setCurrentSection((prevSection) => {
        console.log('Before state change: currentSection =', prevSection);
        return prevSection + 1;
      });
      
      console.log('After state change: currentSection =', currentSection);
    
  };

  const handleBack = () => {
    setCurrentSection((prevSection) => prevSection - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Additional logic for form submission
    }else{
      alert("Invalid");
    }
  };

  const [fileData, setFileData] = useState({
    photoID: null,
    proofOfAddress: null,
    payStubs: null,
    employmentVerification: null,
    bankStatements: null,
    otherFinancialDocs: null,
  });

  const handleFileInputChange = (field) => (event) => {
    setFileData({ ...fileData, [field]: event.target.files[0] });
  };

  const getFileName = (field) => {
    const file = fileData[field];
    return file ? file.name : 'No file chosen';
  };

  const handleGeneratePDF = () => {
    const pdf = new jsPDF();
   

    const lineHeight = 5;
    const startY = 25;

    Object.keys(formData).forEach((field, index) => {
      pdf.text(10, startY + index * lineHeight, `${field}: ${formData[field]}`);
    });

    Object.keys(fileData).forEach((field, index) => {
      pdf.text(10, startY + (Object.keys(formData).length + index) * lineHeight, `${field}: ${getFileName(field)}`);
    });

    const fileName = 'confirmation.pdf';
    pdf.save(fileName);
  };
  
    // const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    // const [feedbackFormData, setFeedbackFormData] = useState({
    //   feedback: '',
    //   // Add more fields as needed
    // });
  
    // const handleFinish = () => {
    //   // Display feedback form
    //   setShowFeedbackForm(true);
    // };
  
    // const handleFeedbackInputChange = (field) => (event) => {
    //   setFeedbackFormData({ ...feedbackFormData, [field]: event.target.value });
    // };
  
    // const handleFeedbackSubmit = (event) => {
    //   event.preventDefault();
    //   // Additional logic for feedback submission
    //   console.log('Feedback submitted:', feedbackFormData);
    //   // You may want to add further logic here (e.g., sending feedback to the server)
    //   // Reset the form and hide the feedback form
    //   setFeedbackFormData({
    //     feedback: '',
    //     // Reset other fields as needed
    //   });
    //   setShowFeedbackForm(false);
    // };

  return (
    <div>
      <div style={{ backgroundColor: '' }}>
        <Container maxWidth="sm" style={{ marginBottom: '28px' }}>
          <Typography variant="h4" gutterBottom>
            <h3 style={{ color: 'black' }}>{sections[currentSection - 1].title}</h3>
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="flex-start">
              {sections[currentSection - 1].fields.map((field) => (
                <Grid key={field} item xs={12} sm={6}>
                  {field === 'termsConditionsCheckbox' ? (
                    <div>
                      <input
                        type="checkbox"
                        id="termsConditionsCheckbox"
                        checked={formData.termsConditionsCheckbox}
                        onChange={handleInputChange('termsConditionsCheckbox')}
                      />
                      <Typography variant="body2" color="black">I accept the terms and conditions </Typography>
                      {errors['termsConditionsCheckbox'] && (
                        <Typography variant="body2" color="error">
                          {errors['termsConditionsCheckbox']}
                        </Typography>
                      )}
                    </div>
                  ) : field === 'loanAgreementParagraph' ? (
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Loan Agreement Paragraph"
                      variant="outlined"
                      value={formData.loanAgreementParagraph}
                      onChange={handleInputChange('loanAgreementParagraph')}
                      error={!!errors['loanAgreementParagraph']}
                      helperText={errors['loanAgreementParagraph']}
                    />
                    ) : field === 'loanType' ? (
                      <Select
                        fullWidth
                        label="Loan Type"
                        variant="outlined"
                        value={formData[field]}
                        onChange={handleInputChange('loanType')}
                        error={!!errors[field]}
                      >
                        {loanTypes.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Select>
                    
                  ) : field.startsWith('photoID') || field.startsWith('proofOfAddress') ? (
                    <>
                      <input
                        accept="image/*,application/pdf"
                        style={{ display: 'none' }}
                        id={field}
                        type="file"
                        onChange={handleFileInputChange(field)}
                      />
                      <label htmlFor={field}>
                        <Button variant="contained" component="span">
                          Upload {field === 'photoID' ? 'Photo ID' : 'Proof of Address'}
                        </Button>
                      </label>
                      {fileData[field] && (
                        <Card style={{ marginTop: '10px' }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={URL.createObjectURL(fileData[field])}
                            alt={getFileName(field)}
                          />
                          <CardContent>
                            <Typography variant="body2" color="black">
                              {getFileName(field)}
                            </Typography>
                          </CardContent>
                        </Card>
                      )}
                    </>
                  ) : (
                    <TextField
                      fullWidth
                      label={field === 'dateOfBirth' ? 'Date of Birth' : field.charAt(0).toUpperCase() + field.slice(1)}
                      variant="outlined"
                      type={field === 'dateOfBirth' ? 'date' : 'text'}
                      InputLabelProps={{ shrink: true }}
                      value={formData[field]}
                      onChange={handleInputChange(field)}
                      error={!!errors[field]}
                      helperText={errors[field]}
                    />
                  )}
                </Grid>
              ))}
              <Grid item xs={12}>
                <Typography variant="body2" color="error">
                  * Please ensure all information is correct before proceeding.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {currentSection > 1 && (
                  <Button onClick={handleBack} variant="contained" color="secondary" fullWidth>
                    Back
                  </Button>
                )}
              </Grid>
              <Grid item xs={6}>
                {currentSection < sections.length && (
                  <Button onClick={handleNext} type="button" variant="contained" color="primary" fullWidth>
                    Next
                  </Button>
                )}
              </Grid>
              
              {currentSection === sections.length && (
                <Grid item xs={12}>
                  <Button onClick={handleGeneratePDF} variant="contained" color="primary" fullWidth>
                    Generate PDF
                  </Button>
                  <Button type='submit' variant="contained" color="primary" fullWidth >
                    Finish
                  </Button>
                </Grid>
              )}
            </Grid>
          </form>
           {/* Feedback Form
           {showFeedbackForm && (
            <form onSubmit={handleFeedbackSubmit}>
              <TextField
                fullWidth
                label="Feedback"
                variant="outlined"
                multiline
                rows={4}
                value={feedbackFormData.feedback}
                onChange={handleFeedbackInputChange('feedback')}
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Feedback
              </Button>
            </form>
              )} */}
        </Container>
      </div>
    </div>
  );
};

export default ApplyLoans;
