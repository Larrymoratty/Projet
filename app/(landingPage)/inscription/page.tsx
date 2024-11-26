import React from 'react';
import { RegisterForm } from '@/components/register-form';

const page = () => {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center px-4">
      <RegisterForm />
    </div>
  )
}

export default page