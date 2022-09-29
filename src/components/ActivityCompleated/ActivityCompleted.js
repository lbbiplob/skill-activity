import React from 'react';
import './ActivityCompleted.css'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ActivityCompleted = () => {

    const notify = () => toast("Activity Completed",{ position: "top-center"});

    return (
        <div>
            <button onClick={notify} className='activity-btn'>Activity Completed</button>
             <ToastContainer />
        </div>
    );
};

export default ActivityCompleted;