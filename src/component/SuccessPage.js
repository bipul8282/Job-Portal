import React from 'react';
import { useSelector } from 'react-redux';

function SuccessPage() {
  const applicationData = useSelector((state) => state.application.applicationData);

  return (
    <div>
      <h2>Application Submitted Successfully</h2>
      <h3>Application Preview:</h3>
      <p>Name: {applicationData.name}</p>
      <p>Email: {applicationData.email}</p>
      <p>Cover Letter: {applicationData.coverLetter}</p>
      
    </div>
  );
}

export default SuccessPage;