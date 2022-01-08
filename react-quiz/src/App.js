import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import Quiz from './container/Quiz/Quiz'
import QuizList from './container/QuizList/QuizList';
import Auth from './container/Auth/Auth';
import QuizCreator from './container/QuizCreator/QuizCreator';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/quiz-creator" element={<QuizCreator />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/" element={<QuizList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
