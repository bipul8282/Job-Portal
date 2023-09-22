


const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
  ];
  
  const jobs = [
    { id: 1, title: 'Job 1', description: 'Description for Job 1' },
    { id: 2, title: 'Job 2', description: 'Description for Job 2' },
  ];
  
  
  const yourApiService = {
    login: async (formData) => {
      
      const { username, password } = formData;
      const user = users.find((u) => u.username === username && u.password === password);
      if (user) {
        return { ...user, password: undefined }; 
      } else {
        throw new Error('Invalid username or password');
      }
    },
  
    signup: async (formData) => {
      
      
      const newUser = {
        id: users.length + 1,
        ...formData,
      };
      users.push(newUser);
      return { ...newUser, password: undefined }; 
    },
  
    getJobDetails: async (jobId) => {
      
      const job = jobs.find((j) => j.id === jobId);
      if (job) {
        return job;
      } else {
        throw new Error('Job not found');
      }
    },
  };
  
  export default yourApiService;
  