import "react-step-progress-bar/styles.css";
import * as React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from 'redux';
import { selectFoundChild, getFoundChildStatus, getFoundChildError } from './FoundChildSlice'
import { ProgressBar, Step } from "react-step-progress-bar";

const steps = [
  {
    status: "Reported"
  },
  {
    status: "Verified"
  },
  {
    status: "Accepted"
  },
  {
    status: "Has Housing"
  },
  {
    status: "In School"
  },
  {
    status: "Complaint Completed"
  }
];
const ComplaintStatus = () => {
    
  const status = useSelector(getFoundChildStatus)
    const foundChildData = useSelector(selectFoundChild)
    const error = useSelector(getFoundChildError)


    const transfer = {
      status: "approved" // change transfer status to progress bar
    };
  
    const getStepPosition = (transferStatus) => {
      
      foundChildData.map((e) => {
        console.log(e);
        if(e.isVerified === 'true'){
          return steps.findIndex(({ status }) => status === transferStatus) + 3;
        } 
        if (e.isAccepted === 'true' ){
          return steps.findIndex(({ status }) => status === transferStatus) + 4;
        }
        if (e.hasHousing === 'true' ){
          return steps.findIndex(({ status }) => status === transferStatus) + 5;
        }
        if (e.inSchool === 'true' ){
          return steps.findIndex(({ status }) => status === transferStatus) + 6;
        }
        if (e.compCompleted === 'true' ){
          return steps.findIndex(({ status }) => status === transferStatus) + 7;
        }
        


      })
      
      return steps.findIndex(({ status }) => status === transferStatus) + 2;
      
      
    };

    if(status === 'Loading'){
        return <p>Loading</p>
    } else if (status === 'Succeeded'){
        return( 
          foundChildData.map((e) => {
            console.log(e);

            return (
              <React.Fragment>
            <div>
            <h4> {e._id}  : {e.name}</h4>  
            <ProgressBar
          width={750}
          percent={100 * (getStepPosition(transfer.status) / steps.length)}
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        >
          {steps.map((step, index, arr) => {
            return (
              <Step
                position={100 * (index / arr.length)}
                transition="scale"
                children={({ accomplished }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      color: "black",
                      backgroundColor: accomplished ? "green" : "gray"
                    }}
                  >
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {step.status}
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
        <br />
        </div>
            </React.Fragment>
            )

        }))
    } else  {
        return <p>{error}</p>;
      }
}

export default ComplaintStatus;