import React from 'react'

import {ItemContainer} from './styles';

export default function Item({repo ,removerItem}) {
const remove = ()=>{
  removerItem(repo.id)
}

  return (
    <ItemContainer >
      <h3> {repo.name} </h3>
      <p> {repo.full_name}</p>
      <div className='links'>
      <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver Repositorio</a>
      <a href="#" className='remover' rel='noreferrer' onClick={remove}>Remover</a>
      </div>
      <br/>
      <hr/>
    </ItemContainer>
  )
}

