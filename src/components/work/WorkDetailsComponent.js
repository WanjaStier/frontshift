import React from 'react';

export default function WorkDetailsComponent(props) {
  console.log(props)
  return (
    <div>
      <h1>Work details</h1>
      <h3>{props.project.title}</h3>
      <p>{props.project.description}</p>
    </div>
  );
}
