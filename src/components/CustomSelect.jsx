import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      background: 'var(--colors-ui-base)',
      color: 'var(--color-text)',
      borderRadius: 'var(--radii)',
      pading: '0.25rem',
      boreder: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provide, state) => ({
      ...provide,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
    }),
  }
})`
  width: 200px;
  border-radius: var(--radi);
  font-famile: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    pading-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;