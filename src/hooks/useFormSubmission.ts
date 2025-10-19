import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

interface SubmissionState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export const useFormSubmission = () => {
  const [state, setState] = useState<SubmissionState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  });

  const submitForm = async (formData: FormData) => {
    setState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      errorMessage: ''
    });

    try {
      const response = await fetch('https://leadmode-backend.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setState({
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: ''
        });
      } else {
        setState({
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: result.message || '提交失敗，請稍後再試'
        });
      }
    } catch (error) {
      setState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: '網絡錯誤，請檢查網絡連接'
      });
    }
  };

  const resetState = () => {
    setState({
      isLoading: false,
      isSuccess: false,
      isError: false,
      errorMessage: ''
    });
  };

  return {
    ...state,
    submitForm,
    resetState
  };
};
