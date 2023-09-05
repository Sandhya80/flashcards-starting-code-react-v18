import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {quizId, name, topicId, cardIds} = action.payload;
            state.quizzes[quizId] = {
                quizId: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
            return state;
        }
    }
}); 

export const newQuizThunk = (quiz) => {
    const {topicId, quizId} = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizId({
            topicId: topicId,
             quizId: quizId
        }));
    }
};

export const selectQuiz = (state) => {
return state.quizzes.quizzes;
};

export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;
            