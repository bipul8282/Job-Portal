import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  getJobDetails} from '../redux/action'; 

function JobDetails({ match }) {
  const jobId = match.params.id;
  const dispatch = useDispatch();
  const job = useSelector((state) => state.jobs.selectedJob);

  useEffect(() => {
    dispatch(getJobDetails(jobId));
  }, [dispatch, jobId]);

  return (
    <div>
      <h2>Job Details</h2>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <button>Apply</button>
    </div>
  );
}

export default JobDetails;