import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  return (
  <Card>
    <Image src={props.charInfo.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.charInfo.name}</Card.Header>
      <Card.Meta>{props.charInfo.species} {props.charInfo.status}</Card.Meta>
      <Card.Description>
      Location: {props.charInfo.location.name}
      <br></br>
      Origin: {props.charInfo.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a>
    </Card.Content>
  </Card>
  );
}