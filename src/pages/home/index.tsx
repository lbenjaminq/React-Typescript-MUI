import React, { useEffect, useState } from "react";
import { Container, Button, Grid, Pagination, Box } from "@mui/material";
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

  const [pageNum, setPageNum] = useState(1);
  const [noticePage, setnoticePage] = useState(9);

  const lastNotice = pageNum * noticePage;
  const firstNotice = lastNotice - noticePage;
  const currentNotice = allNotices.slice(firstNotice, lastNotice);
  const count = Math.ceil(allNotices.length / 9)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNum(value);
    console.log(count)
  };

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="BITCOIN"
        description="THE FUTURE"
        element={<Button variant="contained">MORE</Button>}
      />
      <div style={{ marginTop: "40px" }}>
        <Box sx={{width:"100%",display:"flex",justifyContent:"center",mb:4, mt:4}}>
          <Pagination count={count} color="primary" page={pageNum} onChange={handleChange}/>
        </Box>
        {status === Status.SUCCESS ? (
          <Grid
            container
            spacing={4}
            direction="row"
            sx={{ justifyContent: "center" }}
          >
            {currentNotice.map((notice) => (
              <Grid key={notice.title} item>
                <CardComponent
                  title={notice.title}
                  urlToImage={notice.urlToImage}
                  description={notice.description}
                  url={notice.url}
                  author={notice.author}
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
