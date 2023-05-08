import { PlayFab, PlayFabClient } from "playfab-sdk"
PlayFab.settings.titleId = "67A0F"
const login = (playerId) => {
    return new Promise((resolve, reject) => {
        PlayFabClient.LoginWithCustomID({
            CreateAccount: true,
            CustomId: playerId,
        }, (error, result) => {
            if (result) { resolve(result.data.PlayFabId) }
            if (error) { reject(error) }
        })
    })
}
const setName = (name) => {
    return new Promise((resolve, reject) => {
        PlayFabClient.UpdateUserTitleDisplayName({
            DisplayName: name
        }, (error, result) => {
            if (result) { resolve(result) }
            if (error) { reject(error) }
        })
    })
}

const incrementClick = () => {
    return new Promise((resolve, reject) => {
        PlayFabClient.ExecuteCloudScript({
            FunctionName: "incrementClicks",
        }, (error, result) => {
            if (result) { resolve(result) }
            if (error) { reject(error) }
        })
    })
}

const getLeaderboard = () => {
    return new Promise((resolve, reject) => {
        PlayFabClient.GetLeaderboard({
            StartPosition: 0,
            MaxResultsCount: 100,
            StatisticName: "clicks"
        }, (error, result) => {
            if (result) { resolve(result.data.Leaderboard) }
            if (error) { reject(error) }
        })
    })
}

export default [login, setName, incrementClick, getLeaderboard]