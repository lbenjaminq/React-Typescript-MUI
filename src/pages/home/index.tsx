import React, { useEffect, useState } from "react";
import { Container, Button, Grid } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { NoticeType } from "./Interface/notice.interface";

enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  REJECTED = "REJECTED",
}

export const HomePage: React.FC<{}> = () => {
  const [allNotices, setAllNotices] = useState<NoticeType[]>([]);
  const [status, setStatus] = useState<Status>(Status.PENDING);

  useEffect(() => {
    characters
      .getAll()
      .then((response) => {
        setStatus(Status.SUCCESS);
        setAllNotices(response.data.articles);
      })
      .catch((error) => {
        setStatus(Status.REJECTED);
        console.log(error);
      });
  }, []);

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="BITCOIN"
        description="THE FUTURE"
        element={<Button variant="contained">MORE</Button>}
      />
      <div style={{marginTop:"40px"}}>
        {status === Status.SUCCESS ? (
          <Grid container spacing={4} direction="row" sx={{justifyContent:"center"}}>
            {allNotices.map((notice) => (
              <Grid key={notice.title} item>
                <CardComponent
                  title={notice.title}
                  urlToImage={notice.urlToImage}
                  description={notice.description}
                  url={notice.url}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};
