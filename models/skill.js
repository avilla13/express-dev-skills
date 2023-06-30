const skills = [
    {id: 0, name: "HTML5", learned: true},
    {id: 1, name: "CSS", learned: true},
    {id: 2, name: "JavaScript", learned: true},
    {id: 3, name: "Node.js", learned: false},
    {id: 4, name: "Express.js", learned: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
   console.log(skill);
    skill.id = Date.now() % 10000;
    skill.learned = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}