import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const {topicId, name, icon} = action.payload;
            state.topics[topicId] = {
                topicId: topicId,
                name: name,
                icon,
                quizIds: []
            };
            return state;
        },
        addQuizId: (state, action) => {            
            const { quizId, topicId } = action.payload;
            return state.topics[topicId].quizIds.push(quizId);                        
        }
    }
});

export const selectTopics = (state) => {
    return state.topics.topics;
};


export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;