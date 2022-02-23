import { SpinnerDotted } from 'spinners-react';
import { Wraper } from './Loading.styled';

function Loading() {
  return (
    <Wraper>
      <SpinnerDotted
        size={50}
        thickness={100}
        speed={161}
        color="var(--second-accentcolor)"
      />
    </Wraper>
  );
}

export { Loading };
