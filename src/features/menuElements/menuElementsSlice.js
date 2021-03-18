import { createSlice } from '@reduxjs/toolkit';

export const menuElementsSlice = createSlice({
  name: 'menuElements',
  initialState: {
    main: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Action",
        path: "/genre/action",
        background: "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        title: "Card",
        path: "/genre/card",
        background: 'https://media.rawg.io/media/screenshots/3e7/3e728c858ebd673e099cab3558a47d42.jpg'
      },
      {
        title: "Educational",
        path: "/genre/educational",
        background: "https://media.rawg.io/media/screenshots/fe3/fe356c2c94aa4a7bab58b635014dae08.jpg"
      },
      {
        title: "Board",
        path: "/genre/board-games",
        background: "https://media.rawg.io/media/screenshots/b7c/b7c6fc606964eb21b79ca4de1eb7705c.jpeg"
      },
      {
        title: "Family",
        path: "/genre/family",
        background: "https://media.rawg.io/media/screenshots/375/375f84d018242d7519a230f623981217.jpg"
      },
      {
        title: "Fighting",
        path: "/genre/fighting",
        background: "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg"
      },
      {
        title: "Platformer",
        path: "/genre/platformer",
        background: "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png"
      },
      {
        title: "Racing",
        path: "/genre/racing",
        background: "https://media.rawg.io/media/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg"
      },
      {
        title: "Puzzle",
        path: "/genre/puzzle",
        background: "https://media.rawg.io/media/games/8cd/8cd179c85bd3de8f79bef245b15075fb.jpg"
      },
      {
        title: "Simulation",
        path: "/genre/simulation",
        background: "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg"
      },
      {
        title: "Casual",
        path: "/genre/casual",
        background: "https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg"
      },
      {
        title: "Strategy",
        path: "/genre/strategy",
        background: "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg"
      },
    ],
    footer: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      }
    ]
  }
});

export const selectMenuMain = state => state.menuElements.main;
export const selectMenuFooter = state => state.menuElements.footer;

export default menuElementsSlice.reducer;
