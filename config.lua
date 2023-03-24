-- Come to my discord :D https://discord.gg/r74XzV7QDx --
-- Come to my discord :D https://discord.gg/r74XzV7QDx --
-- Come to my discord :D https://discord.gg/r74XzV7QDx --

Config = {} -- Dont touch
Config.RentVehicles = {} -- Dont touch

Config.MoneyType = "bank" -- "cash" or "bank" | It will take money from the player according to the method you choose.
Config.TeleportPlayerBack = true -- If yes then the player will be teleported back to rental coords.
Config.EnablePed = true  -- If true then ped will be enabled 

Config.Lang = { -- LANG
    ["CAR_RENTED"] = "You rented a car.",
    ["TIME_EXPIRED"] = "The vehicle you rented has expired, and has been returned to us. I hope you are satisfied with us",
    ["HALF_TIME"] = "Half of the time is over",
    ["ALREADY_HAVE_CAR"] = "You have already rented a car. Come back again when it expires and is delivered",
    ["NO_MONEY"] = "You don't have any money!"
}

Config.RentVehicles["Compacts"] = { -- rental = the UI text | rentaltime = rent time (IMPORTANT: Just change the number before --> *)
    { label = "Blista", name = "blista", price = 2000, rental = "15 Minutes", rentaltime = 15*60000 },
}

Config.RentVehicles["Sports"] = { -- rental = the UI text | rentaltime = rent time (IMPORTANT: Just change the number before --> *)
    { label = "Carbonizzare", name = "carbonizzare", price = 2000, rental = "10 Minutes", rentaltime = 10*60000 },
    { label = "Elegy 2", name = "elegy2", price = 5000, rental = "30 Minutes", rentaltime = 30*60000 },
}

Config.RentCars = {
    {
        name = "AUTOMOBILE", -- Name of the company :D just UI thing. You can change it if you want
        Vehicles = Config.RentVehicles, -- Dont Touch
        coord = vector3(-246.87, -993.06, 29.22), -- The coords that player will press E to open the menu
        ViewModeCoords = vector4(-1324.97, 144.83, -99.82, 61.49), -- Dont touch
        CarSpawnAfterRent = vector4(-280.94, -985.45, 30.45, 248.76), --  The coords that car will be spawned after you rent

        -- Ped/NPC Settings
        PedCoords = vector3(-246.85, -993.07, 28.22), -- Ped coords
        PedHeading = 166.67, -- Ped Heading
        PedHash = "u_m_y_baygor", -- Ped Hash --> https://wiki.rage.mp/index.php?title=Peds
        PedScenario = "WORLD_HUMAN_SMOKING" -- Ped Scenario
    },
}