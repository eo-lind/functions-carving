const createWoodBlock = () => {
    const woodObject = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    return `The ${woodObject.length}-inch, ${woodObject.material} wood block was carved into a wooden ${woodObject.purpose}`
}

const carvingString = createWoodBlock()

console.log(carvingString)

