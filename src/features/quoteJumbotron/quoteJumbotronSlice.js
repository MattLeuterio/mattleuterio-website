import { createSlice } from '@reduxjs/toolkit';

export const quoteJumbotronSlice = createSlice({
  name: 'quoteJumbotron',
  initialState: {
    quotes: [
      {
        text:
          "There are plenty of skills I've learned from playing video games. It's more interactive than watching TV, because there are problems to solve as you're using your brain.",
        author: "Shaun White",
      },
      {
        text:
          "Some people say video games rot your brain, but I think they work different muscles that maybe you don't normally use.",
        author: "Ezra Koenig",
      },
      {
        text:
          "Video games are bad for you? That's what they said about rock-n-roll.",
        author: "Shigeru Miyamoto",
      },
      {
        text:
          "Playing video games is something I enjoy in my spare time. I'm a gamer, always have been.",
        author: "Kevin Garnett",
      },
    ]
  }
});

export const selectQuote = state => state.quoteJumbotron.quotes;

export default quoteJumbotronSlice.reducer;
