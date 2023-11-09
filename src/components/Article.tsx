import { Card, Button, Row, Col  } from "react-bootstrap"
import {useState, useEffect } from "react"

interface article {
    events: []
featured: boolean
id : number 
image_url : string
launches : []
news_site: string
published_at : string
summary : string 
title : string 
updated_at : string 
url : string
}

const Article = () => {

    const [articles, setArticles] = useState<article[]>([])

const getNews = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
    .then((res) => {
        if(res.ok) {
            return res.json()
        } else {
            throw new Error("Errore nel recupero info")
        }
    })
    .then((data) => {
        console.log(data)
        setArticles(data.results)
    })
    .catch((err) => {
        console.log(err)
    })
}
useEffect(() => {
    return getNews()
}, [])



    return  <Row>
        <Col xs={9}>
        <Card>
    <Card.Img variant="top" src={articles[0].image_url} />
    <Card.Body>
      <Card.Title>{articles[0].title}</Card.Title>
      <Card.Text className="text-start">{articles[0].published_at.slice(0,10)}</Card.Text>
      <Card.Text>
        {articles[0].summary}
      </Card.Text>
      <Button variant="primary">Dettagli</Button>
    </Card.Body>
  </Card>
  </Col>
  <Col xs={3}>{articles.map( (singleArticle) => {
    return <div key={singleArticle.id} className="my-3 border">
        <img style={{width : "60px"}} src={singleArticle.image_url} alt="booh"></img>
        <span>{singleArticle.title}</span>

    </div>
  })}
  </Col>
  </Row>
}
export default Article