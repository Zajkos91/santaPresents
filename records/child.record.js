class ChildRecord {
    static listAll() {
        return [{
            id: 'afd',
            name: 'Ania',
            gift: 'domek dla lalek',
        },
        {
            id: 'abc',
            name: 'Piotrek',
            gift: 'rower',
        },
        ];
    }
}

module.exports = {
    ChildRecord,
}