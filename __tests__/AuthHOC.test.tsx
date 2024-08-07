
import React from 'react';
import { render } from '@testing-library/react';
import AuthForm from "@/components/AuthForm";

test('renders SampleComponent', () => {
  render(<AuthForm mode="Login" onSubmit={async(data) => console.log(data)} />);
});