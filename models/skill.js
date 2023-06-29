const skills = [
    {id: 0, name: "HTML5", learned: true},
    {id: 1, name: "CSS", learned: true},
    {id: 2, name: "JavaScript", learned: true},
    {id: 3, name: "Node.js", learned: false},
    {id: 4, name: "Express.js", learned: false}
]

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}