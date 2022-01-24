import { readZippedRosterFile } from './helpers/readRosterFile';
import { Create40kRoster } from "../src/roster40k";

describe("Create40kRoster", function() {
  it("loads test/Guard.ros", async function() {
    const doc = await readZippedRosterFile('test/Guard.ros');
    const roster = Create40kRoster(doc);

    expect(roster).toEqual(
      jasmine.objectContaining({
        '_cost': jasmine.objectContaining({_powerLevel: 101, _points: 1625, _commandPoints: 0}),
        '_forces': [
          jasmine.objectContaining({
            '_configurations': [],
            '_units': [
              jasmine.objectContaining({
                '_name': "Commissar Yarrick",
                '_cost': jasmine.objectContaining({_powerLevel: 7, _points: 100, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Commissar Yarrick"}),
                ],
                '_modelList': [
                  "Commissar Yarrick (Bale Eye, Bolt pistol, Storm bolter, Power Klaw, Master of Command, Warlord)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Bale Eye"}),
                  jasmine.objectContaining({'_name': "Bolt pistol"}),
                  jasmine.objectContaining({'_name': "Storm bolter"}),
                  jasmine.objectContaining({'_name': "Power Klaw"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Knight Commander Pask",
                '_cost': jasmine.objectContaining({_powerLevel: 13, _points: 207, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Knight Commander Pask"}),
                ],
                '_modelList': [
                  "Knight Commander Pask (Battle Cannon, Heavy Bolter, Stat Damage (Pask))"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Battle Cannon"}),
                  jasmine.objectContaining({'_name': "Heavy bolter"}),
                ],
                '_woundTracker': [
                  jasmine.objectContaining({'_name': "Pask Russ 1"}),
                  jasmine.objectContaining({'_name': "Pask Russ 2"}),
                  jasmine.objectContaining({'_name': "Pask Russ 3"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Sly Marbo",
                '_cost': jasmine.objectContaining({_powerLevel: 4, _points: 55, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Sly Marbo"}),
                ],
                '_modelList': [
                  "Sly Marbo (Ripper Pistol, Envenomed Blade, Frag Grenades)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Ripper Pistol"}),
                  jasmine.objectContaining({'_name': "Envenomed Blade"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Conscripts",
                '_cost': jasmine.objectContaining({_powerLevel: 3, _points: 80, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Conscript"}),
                ],
                '_modelList': [
                  "20x Conscript (Lasgun, Frag grenade)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Lasgun"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Infantry Squad",
                '_cost': jasmine.objectContaining({_powerLevel: 3, _points: 40, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Guardsman"}),
                  jasmine.objectContaining({'_name': "Sergeant"}),
                ],
                '_modelList': [
                  "9x Guardsman (Lasgun, Frag grenade)",
                  "Sergeant (Laspistol, Frag grenade)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Lasgun"}),
                  jasmine.objectContaining({'_name': "Laspistol"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Infantry Squad",
                '_cost': jasmine.objectContaining({_powerLevel: 3, _points: 40, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Guardsman"}),
                  jasmine.objectContaining({'_name': "Sergeant"}),
                ],
                '_modelList': [
                  "9x Guardsman (Lasgun, Frag grenade)",
                  "Sergeant (Laspistol, Frag grenade)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Lasgun"}),
                  jasmine.objectContaining({'_name': "Laspistol"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Infantry Squad",
                '_cost': jasmine.objectContaining({_powerLevel: 3, _points: 40, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Guardsman"}),
                  jasmine.objectContaining({'_name': "Sergeant"}),
                ],
                '_modelList': [
                  "9x Guardsman (Lasgun, Frag grenade)",
                  "Sergeant (Laspistol, Frag grenade)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Lasgun"}),
                  jasmine.objectContaining({'_name': "Laspistol"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Infantry Squad",
                '_cost': jasmine.objectContaining({_powerLevel: 3, _points: 40, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Guardsman"}),
                  jasmine.objectContaining({'_name': "Sergeant"}),
                ],
                '_modelList': [
                  "9x Guardsman (Lasgun, Frag grenade)",
                  "Sergeant (Laspistol, Frag grenade)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Lasgun"}),
                  jasmine.objectContaining({'_name': "Laspistol"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Militarum Tempestus Scions",
                '_cost': jasmine.objectContaining({_powerLevel: 5, _points: 65, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Tempestor"}),
                  jasmine.objectContaining({'_name': "Tempestus Scion"}),
                ],
                '_modelList': [
                  "4x Scion (Hot-shot Lasgun, Frag & Krak grenades)",
                  "Scion w/ Special Weapon (Grenade Launcher, Frag & Krak grenades)",
                  "Scion w/ Vox-caster (Hot-Shot Lasgun, Hot-shot Laspistol, Vox-caster)",
                  "Tempestor (Hot-shot Laspistol, Power fist, Frag & Krak grenades)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Grenade Launcher (Frag)"}),
                  jasmine.objectContaining({'_name': "Grenade Launcher (Krak)"}),
                  jasmine.objectContaining({'_name': "Hot-shot Lasgun"}),
                  jasmine.objectContaining({'_name': "Hot-shot Laspistol"}),
                  jasmine.objectContaining({'_name': "Power fist"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                  jasmine.objectContaining({'_name': "Krak grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Bullgryns",
                '_cost': jasmine.objectContaining({_powerLevel: 7, _points: 120, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Bullgryn"}),
                  jasmine.objectContaining({'_name': "Bullgryn Bone 'ead"}),
                ],
                '_modelList': [
                  "2x Bullgryn (Grenadier Gauntlet, Frag Bombs, Slabshield)",
                  "Bullgryn Bone 'ead (Grenadier Gauntlet, Frag Bombs, Slabshield)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Grenadier Gauntlet"}),
                  jasmine.objectContaining({'_name': "Frag Bombs"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Hades Breaching Drill Squadron",
                '_cost': jasmine.objectContaining({_powerLevel: 6, _points: 116, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Hades Breaching Drill"}),
                  jasmine.objectContaining({'_name': "Veteran"}),
                  jasmine.objectContaining({'_name': "Veteran Sergeant"}),
                ],
                '_modelList': [
                  "Hades Breaching Drill (Melta Cutter Drill)",
                  "Veteran Sergeant (Laspistol, Chainsword, Frag Grenades)",
                  "9x Veteran w/ Shotgun (Shotgun, Frag Grenades)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Laspistol"}),
                  jasmine.objectContaining({'_name': "Shotgun"}),
                  jasmine.objectContaining({'_name': "Chainsword"}),
                  jasmine.objectContaining({'_name': "Melta Cutter Drill"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Special Weapons Squad",
                '_cost': jasmine.objectContaining({_powerLevel: 2, _points: 39, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Guardsman"}),
                ],
                '_modelList': [
                  "3x Guardsman (Lasgun, Frag grenade)",
                  "Guardsman W/ Special Weapon (Grenade Launcher, Frag grenade)",
                  "Guardsman W/ Special Weapon (Meltagun, Frag grenade)",
                  "Guardsman W/ Special Weapon (Sniper rifle, Frag grenade)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Grenade Launcher (Frag)"}),
                  jasmine.objectContaining({'_name': "Grenade Launcher (Krak)"}),
                  jasmine.objectContaining({'_name': "Lasgun"}),
                  jasmine.objectContaining({'_name': "Meltagun"}),
                  jasmine.objectContaining({'_name': "Sniper rifle"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Hellhounds",
                '_cost': jasmine.objectContaining({_powerLevel: 18, _points: 290, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Hellhound"}),
                ],
                '_modelList': [
                  "Bane Wolf (Turret-mounted Chem Cannon, Heavy Bolter, Stat Damage (HS))",
                  "Devil Dog (Heavy Bolter, Turret-mounted Melta Cannon, Stat Damage (HS))",
                  "Hellhound (Heavy Bolter, Turret-mounted Inferno Cannon, Stat Damage (HS))"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Chem Cannon"}),
                  jasmine.objectContaining({'_name': "Heavy bolter"}),
                  jasmine.objectContaining({'_name': "Inferno Cannon"}),
                  jasmine.objectContaining({'_name': "Melta Cannon"}),
                ],
                '_woundTracker': [
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 1"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 2"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 3"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 1"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 2"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 3"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 1"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 2"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 3"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Scout Sentinels",
                '_cost': jasmine.objectContaining({_powerLevel: 3, _points: 35, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Scout Sentinel"}),
                ],
                '_modelList': [
                  "Scout Sentinel (Multi-laser)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Multi-laser"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Tauros Venator",
                '_cost': jasmine.objectContaining({_powerLevel: 4, _points: 64, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Tauros"}),
                ],
                '_modelList': [
                  "Tauros (Twin Multi-Laser)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Twin Multi-Laser"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Hydras",
                '_cost': jasmine.objectContaining({_powerLevel: 7, _points: 93, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Hydra"}),
                ],
                '_modelList': [
                  "Hydra (Heavy Bolter, Hydra Quad Autocannon, Stat Damage (HS))"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Heavy bolter"}),
                  jasmine.objectContaining({'_name': "Hydra Quad Autocannon"}),
                ],
                '_woundTracker': [
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 1"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 2"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 3"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Rapier Laser Destroyer",
                '_cost': jasmine.objectContaining({_powerLevel: 4, _points: 88, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Guardsmen Crew"}),
                  jasmine.objectContaining({'_name': "Rapier"}),
                ],
                '_modelList': [
                  "2x Guardsmen Crew (Lasgun, Frag Grenades)",
                  "Rapier (Laser Destroyer)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Laser Destroyer"}),
                  jasmine.objectContaining({'_name': "Lasgun"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Wyverns",
                '_cost': jasmine.objectContaining({_powerLevel: 6, _points: 113, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Wyvern"}),
                ],
                '_modelList': [
                  "Wyvern (Heavy Bolter, Wyven Quad Stormshard Mortar)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Heavy bolter"}),
                  jasmine.objectContaining({'_name': "Wyvern Quad Stormshard Mortar"}),
                ],
                '_woundTracker': [
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 1"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 2"}),
                  jasmine.objectContaining({'_name': "Stat Damage (HS) 3"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Regimental Doctrine",
                '_cost': jasmine.objectContaining({_powerLevel: 0, _points: 0, _commandPoints: 0}),
                '_modelStats': [
                  
                ],
                '_modelList': [
                  
                ],
                '_weapons': [
                  
                ]}),
            ]
          }),
        ]}));
  });
});