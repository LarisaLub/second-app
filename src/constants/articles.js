const articles = [
    {
        name: "Pokemon1",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        text: "Pokemon1"
    },
    {
        name: "Pokemon2",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        text: "Pokemon2"
    }
];

const map = new Map();
map.set("1", "pokemon");
map.set("2", "pokemon");

//map.set("3", "апротма");
map.forEach((key, value, map) => console.log(key, value, map));

export default articles;
