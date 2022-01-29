class geo {
    constructor() {
        this.lat = 43.33,
            this.long = 54.22
    }
}


class langauge1 extends geo {
    constructor(name, country, lat, long) {
        super(lat, long)
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi to ${this.name}`
    }
}