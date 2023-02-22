export const playersConfig = (array =[]) =>{
    if (array.length === 100) {
        return array
    }

    array.push({
        nickname: randomNickName(),
        scores: randomNumber(),
        isAlive: array.length <= 50,
        deaths: randomNumber(),
        kills: randomNumber(),
        friends: []
    })

    return playersConfig(array)
}

export const randomNickName = () => {
    const name = ["Petia", "Vasia"]
    return name[Math.floor(Math.random() * name.length)] + (Math.floor(Math.random() * (100 - 1)) + 1)
}

export const randomNumber = () => {
    return Math.floor(Math.random() * (50 - 1)) + 1
}
