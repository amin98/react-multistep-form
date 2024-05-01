import { FormEvent, useState } from 'react';
import { AccountForm } from './AccountForm';
import { AddressForm } from './AddressForm';
import { UserForm } from './UserForm';
import { useMultiStepForm } from './useMultiStepForm';
import { OverviewToPDF } from './OverviewToPDF';
import { Overview } from './Overview';

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
      <Overview {...data} updateFields={updateFields} />,
      <OverviewToPDF {...data} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    // alert(JSON.stringify(data.firstName));
  }
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '0.5rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: 'max-content',
        overflow: 'hidden',
        maxHeight: '1000px',
        transition: 'max-height 0.5s ease-in-out',
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button type='button' onClick={back}>
              Back
            </button>
          )}
          <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
