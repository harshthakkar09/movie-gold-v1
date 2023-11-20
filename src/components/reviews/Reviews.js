import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap"; // Assuming you have a Card component for each review
import ReviewForm from "../reviewForm/ReviewForm";
import axios from "axios";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/reviews`,
        {
          reviewBody: rev.value,
          imdbId: movieId,
        }
      );

      const updatedReviews = Array.isArray(reviews) ? [...reviews, { body: rev.value }] : [{ body: rev.value }];

      rev.value = "";

      setReviews(updatedReviews);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          <Row>
            <Col>
              <ReviewForm
                handleSubmit={addReview}
                revText={revText}
                labelText="Write a Review?"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          {Array.isArray(reviews) &&
            reviews.map((r, index) => (
              <Row key={index} className="mb-3">
                <Col>
                  <Card>
                    <Card.Body>{r.body}</Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
