import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'

type CharacterType = {
  name:string
  img:string
  status:string
}

export const CardComponent: React.FC<CharacterType> = ({name,img,status}) => {
  return (
      <Card sx={{minHeight:400}}>
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography variant="h4">{name}</Typography>
          <Divider/>
          <Typography sx={{mt:2}}>{status}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained'>
            Learn More
          </Button>
        </CardActions>
      </Card>
  )
}
