const articles = [
    {
        title: "Математика",
        autor: " Смирнов",
        text: "математика основа для физики"
    },
    {
        title: "Физика",
        autor: " Кузнецов",
        text: "физика основа для жизни"
    }
];

const map = new Map();
map.set("1", "bnoo");
map.set("2", " klmkiом");

map.set("3", "апротма");
map.forEach((key, value, map) => console.log(key, value, map));

export default articles;
