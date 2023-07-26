import { SetStateAction } from 'react';

const setState = jest.fn();
export const useStateMock: any = (useState: any) => [useState, setState];

export function setStateMock(value: SetStateAction<any>): void {
  throw new Error('Function not implemented.');
}
