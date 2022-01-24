import { readZippedRosterFile } from './helpers/readRosterFile';
import { Create40kRoster } from "../src/roster40k";

describe("Create40kRoster", function() {
  it("loads test/Magnus_9th.rosz", async function() {
    const doc = await readZippedRosterFile('test/Magnus_9th.rosz');
    const roster = Create40kRoster(doc);

    expect(roster).toEqual(
      jasmine.objectContaining({
        '_cost': jasmine.objectContaining({_powerLevel: 76, _points: 1410, _commandPoints: 6}),
        '_forces': [
          jasmine.objectContaining({
            '_configurations': [
              "Battle Size: 3. Strike Force (101-200 Total PL / 1001-2000 Points)  [12 CP]",
              "Cults of the Legion: Cult of Scheming",
              "Detachment CP",
            ],
            '_units': [
              jasmine.objectContaining({
                '_name': "Ahriman",
                '_cost': jasmine.objectContaining({_powerLevel: 8, _points: 150, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Ahriman"}),
                ],
                '_modelList': [
                  "Ahriman (Inferno Bolt Pistol, Black Staff of Ahriman, Frag & Krak grenades, Prescience, Smite, Weaver of Fates)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Inferno Bolt Pistol"}),
                  jasmine.objectContaining({'_name': "Black Staff of Ahriman"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                  jasmine.objectContaining({'_name': "Krak grenade"}),
                ],
                '_spells': [
                  jasmine.objectContaining({'_name': "Smite"}),
                  jasmine.objectContaining({'_name': "Prescience"}),
                  jasmine.objectContaining({'_name': "Weaver of Fates"}),
                ],
                '_psykers': [
                  jasmine.objectContaining({'_name': "Ahriman"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Exalted Sorcerer",
                '_cost': jasmine.objectContaining({_powerLevel: 6, _points: 100, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Exalted Sorcerer"}),
                ],
                '_modelList': [
                  "Exalted Sorcerer (Inferno Bolt Pistol, Force stave, Frag & Krak grenades, Athenaean Scrolls, Gift of Chaos, Smite)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Inferno Bolt Pistol"}),
                  jasmine.objectContaining({'_name': "Force stave"}),
                  jasmine.objectContaining({'_name': "Frag grenade"}),
                  jasmine.objectContaining({'_name': "Krak grenade"}),
                ],
                '_spells': [
                  jasmine.objectContaining({'_name': "Seeded Strategy"}),
                  jasmine.objectContaining({'_name': "Smite"}),
                  jasmine.objectContaining({'_name': "Gift of Chaos"}),
                ],
                '_psykers': [
                  jasmine.objectContaining({'_name': "Exalted Sorcerer"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Chaos Cultists",
                '_cost': jasmine.objectContaining({_powerLevel: 3, _points: 60, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Chaos Cultist"}),
                  jasmine.objectContaining({'_name': "Cultist Champion"}),
                ],
                '_modelList': [
                  "9x Chaos Cultist w/ Autogun (Autogun)",
                  "Cultist Champion (Autogun)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Autogun"}),
                  jasmine.objectContaining({'_name': "Autogun"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Rubric Marines",
                '_cost': jasmine.objectContaining({_powerLevel: 6, _points: 90, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Aspiring Sorcerer"}),
                  jasmine.objectContaining({'_name': "Rubric Marine"}),
                ],
                '_modelList': [
                  "Aspiring Sorcerer (Inferno Bolt Pistol, Force stave, Smite)",
                  "4x Rubric Marine w/ Inferno Boltgun (Inferno boltgun)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Inferno Bolt Pistol"}),
                  jasmine.objectContaining({'_name': "Inferno boltgun"}),
                  jasmine.objectContaining({'_name': "Force stave"}),
                ],
                '_spells': [
                  jasmine.objectContaining({'_name': "Seeded Strategy"}),
                  jasmine.objectContaining({'_name': "Smite"}),
                ],
                '_psykers': [
                  jasmine.objectContaining({'_name': "Aspiring Sorcerer"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Tzaangors",
                '_cost': jasmine.objectContaining({_powerLevel: 4, _points: 90, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Twistbray"}),
                  jasmine.objectContaining({'_name': "Tzaangors"}),
                ],
                '_modelList': [
                  "Twistbray (Tzaangor blades)",
                  "9x Tzaangor w/ Tzaangor blades (Tzaangor blades)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Tzaangor blades"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Helbrute",
                '_cost': jasmine.objectContaining({_powerLevel: 7, _points: 115, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Helbrute"}),
                ],
                '_modelList': [
                  "Helbrute (Multi-melta, Helbrute fist)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Multi-melta"}),
                  jasmine.objectContaining({'_name': "Helbrute fist"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Scarab Occult Terminators",
                '_cost': jasmine.objectContaining({_powerLevel: 10, _points: 185, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Scarab Occult Sorcerer"}),
                  jasmine.objectContaining({'_name': "Scarab Occult Terminator"}),
                ],
                '_modelList': [
                  "Scarab Occult Sorcerer (Inferno Combi-bolter, Force stave, Smite)",
                  "4x Terminator (Inferno Combi-bolter, Power sword)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Inferno Combi-bolter"}),
                  jasmine.objectContaining({'_name': "Force stave"}),
                  jasmine.objectContaining({'_name': "Power sword"}),
                ],
                '_spells': [
                  jasmine.objectContaining({'_name': "Seeded Strategy"}),
                  jasmine.objectContaining({'_name': "Smite"}),
                ],
                '_psykers': [
                  jasmine.objectContaining({'_name': "Scarab Occult Sorcerer"}),
                ]}),
              jasmine.objectContaining({
                '_name': "Heldrake",
                '_cost': jasmine.objectContaining({_powerLevel: 8, _points: 155, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Heldrake"}),
                ],
                '_modelList': [
                  "Heldrake (Hades autocannon, Heldrake claws)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "Hades autocannon"}),
                  jasmine.objectContaining({'_name': "Heldrake claws"}),
                ],
                '_woundTracker': [
                  jasmine.objectContaining({'_name': "Heldrake"}),
                  jasmine.objectContaining({'_name': "Heldrake1"}),
                  jasmine.objectContaining({'_name': "Heldrake2"}),
                  jasmine.objectContaining({'_name': "Heldrake3"}),
                ]}),
            ]
          }),
          jasmine.objectContaining({
            '_configurations': [
              "Cults of the Legion: Cult of Prophecy",
              "Detachment CP",
            ],
            '_units': [
              jasmine.objectContaining({
                '_name': "Magnus the Red",
                '_cost': jasmine.objectContaining({_powerLevel: 24, _points: 465, _commandPoints: 0}),
                '_modelStats': [
                  jasmine.objectContaining({'_name': "Magnus the Red"}),
                ],
                '_modelList': [
                  "Magnus the Red (The Blade of Magnus, Smite, Warlord)"
                ],
                '_weapons': [
                  jasmine.objectContaining({'_name': "The Blade of Magnus"}),
                ],
                '_spells': [
                  jasmine.objectContaining({'_name': "Smite"}),
                ],
                '_psykers': [
                  jasmine.objectContaining({'_name': "Magnus the Red"}),
                ],
                '_woundTracker': [
                  jasmine.objectContaining({'_name': "Magnus the Red"}),
                  jasmine.objectContaining({'_name': "Magnus the Red1"}),
                  jasmine.objectContaining({'_name': "Magnus the Red2"}),
                  jasmine.objectContaining({'_name': "Magnus the Red3"}),
                ]}),
            ]
          }),
        ]}));
  });
});