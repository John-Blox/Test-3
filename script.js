
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let e = document.getElementById("e")
let f = document.getElementById("f")
let g = document.getElementById("g")
let h = document.getElementById("h")
let i = document.getElementById("i")
let j = document.getElementById("j")
let k = document.getElementById("k")
let l = document.getElementById("l")
let m = document.getElementById("m")
let n = document.getElementById("n")
let o = document.getElementById("o")
let p = document.getElementById("p")
let q = document.getElementById("q")
let r = document.getElementById("r")
let s = document.getElementById("s")
let t = document.getElementById("t")
let u = document.getElementById("u")
let v = document.getElementById("v")
let w = document.getElementById("w")
let y = document.getElementById("y")
let z = document.getElementById("z")

let food = document.getElementById("food")
let animals = document.getElementById("animals")
let countries = document.getElementById("countries")
let cities = document.getElementById("cities")
let fashion = document.getElementById("fashion")
let boy = document.getElementById("boy")
let girl = document.getElementById("girl")
let movies = document.getElementById("movies")
let celebrities = document.getElementById("celebrities")
let songs = document.getElementById("songs")

let gen = document.getElementById("generate")
let myLetter
let myCategory

function getLetter (arr, letter) {
    let place = document.getElementById("place")
    let result = ""
    for (let i in arr) {
        if (arr[i].startsWith(letter)) {
            result = arr[i]
        }
    }
    place.innerHTML = result
    place.style.textTransform = "capitalize"
}

a.onclick = function () {
    myLetter = "a"
    changeAlph(a)
}

b.onclick = function () {
    myLetter = "b"
    changeAlph(b)
}

c.onclick = function () {
    myLetter = "c"
    changeAlph(c)
}

d.onclick = function () {
    myLetter = "d"
    changeAlph(d)
}

e.onclick = function () {
    myLetter = "e"
    changeAlph(e)
}

f.onclick = function () {
    myLetter = "f"
    changeAlph(f)
}

g.onclick = function () {
    myLetter = "g"
    changeAlph(g)
}

h.onclick = function () {
    myLetter = "h"
    changeAlph(h)
}

i.onclick = function () {
    myLetter = "i"
    changeAlph(i)
}

j.onclick = function () {
    myLetter = "j"
    changeAlph(j)
}

k.onclick = function () {
    myLetter = "k"
    changeAlph(k)
}

l.onclick = function () {
    myLetter = "l"
    changeAlph(l)
}

m.onclick = function () {
    myLetter = "m"
    changeAlph(m)
}

n.onclick = function () {
    myLetter = "n"
    changeAlph(n)
}

o.onclick = function () {
    myLetter = "o"
    changeAlph(o)
}

p.onclick = function () {
    myLetter = "p"
    changeAlph(p)
}

q.onclick = function () {
    myLetter = "q"
    changeAlph(q)
}

r.onclick = function () {
    myLetter = "r"
    changeAlph(r)
}

s.onclick = function () {
    myLetter = "s"
    changeAlph(s)
}

t.onclick = function () {
    myLetter = "t"
    changeAlph(t)
}

u.onclick = function () {
    myLetter = "u"
    changeAlph(u)
}

v.onclick = function () {
    myLetter = "v"
    changeAlph(v)
}

w.onclick = function () {
    myLetter = "w"
    changeAlph(w)
}

y.onclick = function () {
    myLetter = "y"
    changeAlph(y)
}

z.onclick = function () {
    myLetter = "z"
    changeAlph(z)
}



food.onclick = function () {
    myCategory = foodArr
    changeCat(food)
}

animals.onclick = function () {
    myCategory = animalsArr
    changeCat(animals)
}

countries.onclick = function () {
    myCategory = countriesArr
    changeCat(countries)
}

cities.onclick = function () {
    myCategory = citiesArr
    changeCat(cities)
}

fashion.onclick = function () {
    myCategory = fashionArr
    changeCat(fashion)
}

boy.onclick = function () {
    myCategory = boyArr
    changeCat(boy)
}

girl.onclick = function () {
    myCategory = girlArr
    changeCat(girl)
}

movies.onclick = function () {
    myCategory = moviesArr
    changeCat(movies)
}

celebrities.onclick = function () {
    myCategory = celebritiesArr
    changeCat(celebrities)
}

songs.onclick = function () {
    myCategory = songsArr
    changeCat(songs)
}

gen.onclick = function () {
    place.style.visibility="visible"
    getLetter(myCategory, myLetter)
}

let categories = [food, animals, countries, cities, fashion, boy, girl, movies, celebrities, songs]

function changeCat (selected) {
    for (let i in categories) {
        categories[i].style.backgroundColor = "lightBlue"
        categories[i].style.borderBottom = "2px solid white"
    }
    selected.style.backgroundColor = "white"
    selected.style.borderBottom = "2px solid black"
}

let alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, y, z]

function changeAlph (selected) {
    for (let i in alphabet) {
        alphabet[i].style.backgroundColor = "lightBlue"
        alphabet[i].style.borderBottom = "lightBlue"
    }
    selected.style.backgroundColor = "white"
    selected.style.borderBottom = "2px solid black"
}

let foodArr = ["apple", "banana", "chocolate", "donut", "egg", "french fries", "grapes",
"ham", "ice cream", "jelly", "kale", "lemon", "mango", "nuts", "orange", "pear", "quiché",
"rice", "sugar", "tacos", "unagi", "venison", "walnuts", "yoghurt", "zucchini"]
let animalsArr = ["alligator", "bear", "cat (of course)", "dog", "elephant", "fennec fox", "gorilla",
"horse", "iguana", "jellyfish", "koala", "llama", "mouse", "newt", "orangutan", "panda",
"quail", "rhino", "scorpion", "tiger", "urchin", "vole", "walrus", "yak", "zebra"]
let countriesArr = ["algeria", "belarus", "cambodia", "denmark", "egypt", "france", "germany",
"honduras", "indonesia", "japan", "kazakhstan", "latvia", "myanmar", "nepal", "oman", "peru",
"qatar", "romania", "spain", "thailand", "ukraine", "vietnam", "wales", "yemen", "zimbabwe"]
let citiesArr = ["abu dhabi", "berlin", "chicago", "dublin", "edinburgh", "frankfurt", "goa", "havana",
"ipoh", "jerusalem", "kabul", "london", "moscow", "new york", "osaka", "phnom penh", "quebec",
"rome", "stockholm", "tokyo", "ulsan", "vancouver", "washington d.c.", "yogyakarta", "zanzibar" ]
let fashionArr = ["apron", "belt", "coat", "dress", "ear muffs", "facemask", "glasses", "hat",
"ice skates", "jewellery", "kilt", "leggings", "mascara", "negligee", "overalls", "pyjamas",
"quilted", "ribbon", "sandals", "t-shirt", "underwear", "vest", "watch", "yarmulke", "zip"]
let boyArr = ["antony", "ben", "chris", "daniel", "edward", "frank", "graham", "harry", "isaac",
"johnny", "kevin", "luke", "mike", "nathan", "oscar", "paul", "quentin", "rick", "shaun",
"theo", "urijah", "vincent", "will", "yusef", "zachary"]
let girlArr = ["anne", "bella", "corrina", "danielle", "eloise", "florence", "grace",
"harriet", "isobel", "josie", "kylie", "lucy", "michelle", "nora", "olivia", "pandora",
"queenie", "ruth", "suzanne", "tiffany", "uma", "violet", "willow", "yvonne", "zoey"]
let moviesArr = ["ace ventura", "babe", "cabin fever", "despicable me", "edward scissorhands",
"face off", "g.i. joe", "hairspray", "i am legend", "jackie brown", "karate kid", "lady & the tramp",
"mad max", "nacho libre", "ocean's eleven", "pan's labyrinth", "quarantine", "raging bull", "seven",
"taxi driver", "united 93", "vertigo", "wayne's world", "y tu mama tambien", "zombieland"]
let celebritiesArr = ["amy adams", "bruce lee", "chris evans", "dua lipa", "eminem", "freddie mercury", 
"gordon ramsay", "hailee steinfeld", "isaac newton", "jeff bezos", "kurt cobain", "lionel messi",
"megan fox", "nicole kidman", "o.j. simpson", "pierce brosnan", "quentin tarantino", "ricky gervais",
"scarlett johansson", "taylor swift", "usain bolt", "vladimir putin", "will smith", "yoko ono", "zayn malik"]
let songsArr = ["awaken", "baby, i love you", "cry, cry, cry", "darkest hour", "eazy duz it", "fast car",
"great big kiss", "hell or highwater", "i put a spell on you", "jet boy, jet girl", "killing moon", "last caress",
"mongolid", "nasty nasty", "orion", "paint it black", "quasimodo", "raven", "sacrifice", "tainted love",
"under pressure", "violent pacification", "wasted youth", "yesterday is here", "zero" ]



