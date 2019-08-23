import React from "react";
import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard({ id, name, type, dimension, residents }) 
{
  const typeDimension = `${type} (${dimension})`;
  return (
    <Card key={id}>
      <Card.Content header={name} />
      <Card.Content description={typeDimension}/>
      <Card.Content extra>
        <Icon name='user' />{residents.length} Residents
      </Card.Content>
    </Card>
  );
}