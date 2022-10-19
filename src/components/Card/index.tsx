import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'

type CharacterType = {
  author:string
  urlToImage:string
  content:string
}

export const CardComponent: React.FC<CharacterType> = ({author,urlToImage,content}) => {
  return (
      <Card sx={{minHeight:400}}>
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt={author}
          loading="lazy"
        />
        <CardContent>
          <Typography variant="h4">{author}</Typography>
          <Divider/>
          <Typography sx={{mt:2}}>{content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained'>
            Learn More
          </Button>
        </CardActions>
      </Card>
  )
}
