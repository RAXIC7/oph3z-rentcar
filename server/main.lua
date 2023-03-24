local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Functions.CreateCallback('oph3z-rentcar:CheckPlayerMoney', function(source, cb, data)
	local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if  Player.Functions.GetMoney(Config.MoneyType) >= data.price then
        Player.Functions.RemoveMoney(Config.MoneyType, data.price)
        cb(true)
    else
        TriggerClientEvent('oph3z-rentcar:CloseUI', src)
    end
end)