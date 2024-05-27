import { rest } from 'msw';
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get("/dishes", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([

        {
          id: 1,
          title: "quarantine buddy",
          category: "shakes",
          price: 16.99,
          img: "./images/item1.jpg",
          desc: `hello this is shake.`,
        },
        {
          id: 2,
          title: " buddy",
          category: "dinner",
          price: 10.99,
          img: "./images/item1.jpg",
          desc: `hello this is dinner.`,
        },
        ,
        {
          id: 3,
          title: "quarantineyy buddy",
          category: "shakes",
          price: 11.99,
          img: "./images/item1.jpg",
          desc: `hello this is shake.`,
        },
        {
          id: 4,
          title: "quarant buddy",
          category: "lunch",
          price: 16.99,
          img: "./images/item1.jpg",
          desc: `hello this is lunch.`,
        },
        {
          id: 5,
          title: "qua buddy",
          category: "lunch",
          price: 19.99,
          img: "./images/item1.jpg",
          desc: `hello this is lunch.`,
        },
        {
          id: 6,
          title: "quyy buddy",
          category: "breakfast",
          price: 14.99,
          img: "./images/item1.jpg",
          desc: `hello this is nashta.`,
        }
        ])
    );
  }),
];
