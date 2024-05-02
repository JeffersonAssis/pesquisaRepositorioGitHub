import React from 'react'

import {ButtonContainer}  from './styles';

export default function Button({onCLick}) {
  return (
    <ButtonContainer onClick={onCLick}>
      <button>Buscar</button>
    </ButtonContainer>
  )
}
