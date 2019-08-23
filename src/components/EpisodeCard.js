import React from "react";
import { Card } from 'semantic-ui-react'

export default function EpisodeCard({ id, name, episode, airDate}) {
  return (

    <Card
    id={id}
    link
    header={name}
    meta={episode}
    description={[
      `Air Date: ${airDate}`,
    ].join('')}
    />

  );
}