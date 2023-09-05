import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
import NewTopicForm from "../../components/NewTopicForm";
// import selectors
import { selectQuiz } from "../quizzes/quizzesSlice";
import { selectTopics } from "./topicsSlice";

export default function Topic() {
  const topics = useSelector(selectTopics);  // replace with selector
  const quizzes = useSelector(selectQuiz); // replace with selector
  let { topicId } = useParams();
  const topic = topics[topicId];  
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
